import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Corpo da requisição inválido." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Verifique os dados informados." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const destination = process.env.CONTACT_EMAIL;

  // TODO: Opcional — configure RESEND_API_KEY e CONTACT_EMAIL no provedor de deploy.
  if (!apiKey || !destination) {
    return NextResponse.json(
      {
        message:
          "Envio por e-mail ainda não configurado. Entre em contato pelo e-mail direto.",
      },
      { status: 503 },
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfólio <onboarding@resend.dev>",
        to: [destination],
        reply_to: parsed.data.email,
        subject: `Contato do portfólio - ${parsed.data.name}`,
        text: `Nome: ${parsed.data.name}\nE-mail: ${parsed.data.email}\n\n${parsed.data.message}`,
      }),
    });

    if (!response.ok) {
      throw new Error("Falha ao enviar pelo provedor de e-mail.");
    }

    return NextResponse.json({ message: "Mensagem enviada com sucesso." });
  } catch {
    return NextResponse.json(
      { message: "Não foi possível enviar agora. Use o e-mail direto." },
      { status: 502 },
    );
  }
}
