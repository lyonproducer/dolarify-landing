import { ChangeDetectionStrategy, Component } from '@angular/core';
import { lastUpdated } from '../../core/data/legal.data';

@Component({
  selector: 'app-privacy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="section">
      <div class="mx-auto max-w-3xl px-6">
        <header class="mb-8">
          <p class="mb-2 text-xs font-semibold tracking-widest text-gold-light uppercase">Legal</p>
          <h1 class="font-display text-3xl font-bold tracking-tight fg md:text-5xl">
            Política de Privacidad
          </h1>
          <p class="mt-3 text-sm fg-muted">Última actualización: {{ updated }}</p>
        </header>

        <div class="space-y-6 fg-secondary">
          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">1. Resumen</h2>
            <p>
              Dolarify es una aplicación móvil que muestra tasas de cambio en tiempo real para Venezuela.
              Esta política describe qué información recopilamos, cómo la usamos y tus derechos.
            </p>
            <p>
              La versión corta: <strong class="fg">no recopilamos datos personales</strong>.
              La app funciona sin registro y todos tus datos se guardan localmente en tu dispositivo.
            </p>
          </section>

          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">2. Datos que no recopilamos</h2>
            <ul class="ml-6 list-disc space-y-2">
              <li>No requerimos cuenta, correo electrónico ni teléfono.</li>
              <li>No almacenamos tus presupuestos, cotizaciones o tasas en nuestros servidores.</li>
              <li>No vendemos ni compartimos información con terceros.</li>
            </ul>
          </section>

          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">3. Datos que se almacenan localmente</h2>
            <p>Toda la información que generas en la app se guarda únicamente en tu dispositivo:</p>
            <ul class="ml-6 list-disc space-y-2">
              <li>Presupuestos y cotizaciones que creas.</li>
              <li>Marcadores de tasas favoritas.</li>
              <li>Configuración de orden de pestañas, modo claro/oscuro y presets de montos.</li>
              <li>Preferencias de anuncios (si aplicable).</li>
            </ul>
            <p>
              Si desinstalas la app, estos datos se eliminan junto con la aplicación.
              Puedes limpiarlos manualmente desde Ajustes dentro de la app.
            </p>
          </section>

          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">4. Fuentes de datos de tasas</h2>
            <p>Las tasas de cambio se obtienen de fuentes públicas oficiales y de terceros:</p>
            <ul class="ml-6 list-disc space-y-2">
              <li>Banco Central de Venezuela (BCV) — tasa oficial del dólar y euro.</li>
              <li>Binance P2P — tasa de referencia para USDT.</li>
            </ul>
            <p>
              No nos hacemos responsables por errores o demoras en la publicación de las tasas por parte de estas fuentes.
            </p>
          </section>

          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">5. Anuncios</h2>
            <p>
              La app muestra anuncios banner a través de Google AdMob.
              AdMob puede usar identificadores publicitarios del dispositivo para mostrar anuncios relevantes.
              Puedes optar por limitar el seguimiento publicitario desde la configuración de tu dispositivo.
            </p>
          </section>

          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">6. Analíticas</h2>
            <p>
              Utilizamos Firebase Analytics para entender cómo se usa la app y mejorarla.
              Estos datos son agregados y anónimos. Puedes desactivarlos desde la configuración de tu dispositivo.
            </p>
          </section>

          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">7. Menores de edad</h2>
            <p>
              Dolarify no está dirigida a menores de 13 años. Si eres padre/madre y crees que tu hijo/a nos ha proporcionado información, contáctanos para eliminarla.
            </p>
          </section>

          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">8. Cambios a esta política</h2>
            <p>
              Podemos actualizar esta política periódicamente. Te notificaremos cualquier cambio significativo dentro de la app.
            </p>
          </section>

          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">9. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política, escríbenos a
              <a href="mailto:soporte@dolarify.app" class="text-gold-light underline">soporte&#64;dolarify.app</a>.
            </p>
          </section>
        </div>
      </div>
    </article>
  `,
  styles: [],
})
export class PrivacyComponent {
  protected readonly updated = lastUpdated;
}
