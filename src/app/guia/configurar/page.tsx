import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";

export const metadata = {
  title: "Configurar la app — Guia Saru Apps",
};

export default function Page() {
  return (
    <GuiaArticleLayout currentSlug="configurar">
      <h1>Configurar la app</h1>

      <h2>Branding</h2>
      <p>En esta seccion el comerciante define:</p>
      <ul>
        <li>
          <strong>Nombre de la app:</strong> el nombre que ven los clientes
        </li>
        <li>
          <strong>Logo:</strong> imagen PNG o JPG (recomendado 512x512px)
        </li>
        <li>
          <strong>Color primario:</strong> se aplica al header, botones
          principales y tabs
        </li>
        <li>
          <strong>Color secundario:</strong> acentos y separadores
        </li>
      </ul>
      <p>
        Hay una vista previa en tiempo real que muestra como se ve la app en un
        celular.
      </p>
    </GuiaArticleLayout>
  );
}
