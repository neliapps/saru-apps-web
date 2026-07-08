import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";

export const metadata = {
  title: "Que es Saru Apps — Guia",
};

export default function Page() {
  return (
    <GuiaArticleLayout currentSlug="que-es">
      <h1>Que es Saru Apps</h1>
      <p>
        Saru Apps es una plataforma SaaS que permite a comerciantes de
        Tiendanube crear, personalizar y publicar aplicaciones moviles (PWA y
        nativas iOS/Android) sin programar. La plataforma tiene tres componentes
        principales:
      </p>
      <ol>
        <li>
          <strong>Panel de administracion</strong> (Dashboard) — donde el
          comerciante configura y gestiona su app
        </li>
        <li>
          <strong>Backend API</strong> — maneja la logica de negocio,
          sincronizacion, notificaciones y generacion de la PWA
        </li>
        <li>
          <strong>App movil nativa</strong> (React Native) — app para publicar
          en App Store y Google Play
        </li>
      </ol>
    </GuiaArticleLayout>
  );
}
