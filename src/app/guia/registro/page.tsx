import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";

export const metadata = {
  title: "Registro y onboarding — Guia Saru Apps",
};

export default function Page() {
  return (
    <GuiaArticleLayout currentSlug="registro">
      <h1>Registro y onboarding</h1>

      <h2>Paso 1: Crear cuenta</h2>
      <p>
        El comerciante se registra en{" "}
        <strong>app.saruapps.com/register</strong> con email, nombre y
        contrasena. Despues del registro, se redirige al wizard de onboarding.
      </p>

      <h2>Paso 2: Onboarding (4 pasos)</h2>
      <ol>
        <li>
          <strong>Tu negocio:</strong> Pais, facturacion mensual, pedidos por
          mes, y si quiere publicar en App Store/Google Play
        </li>
        <li>
          <strong>Objetivos:</strong> Que busca con la app (mas ventas,
          fidelizar, push, presencia en stores, campanas, imagen de marca)
        </li>
        <li>
          <strong>Plan recomendado:</strong> Basado en las respuestas, el sistema
          recomienda el plan ideal. Si el comerciante quiere app nativa, el
          minimo recomendado es Growth
        </li>
        <li>
          <strong>Conectar Tiendanube:</strong> Vincula su tienda de Tiendanube
          para sincronizar productos automaticamente
        </li>
      </ol>
    </GuiaArticleLayout>
  );
}
