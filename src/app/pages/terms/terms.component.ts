import { ChangeDetectionStrategy, Component } from '@angular/core';
import { lastUpdated } from '../../core/data/legal.data';

@Component({
  selector: 'app-terms',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="section">
      <div class="mx-auto max-w-3xl px-6">
        <header class="mb-8">
          <p class="mb-2 text-xs font-semibold tracking-widest text-gold-light uppercase">Legal</p>
          <h1 class="font-display text-3xl font-bold tracking-tight fg md:text-5xl">
            Términos de Servicio
          </h1>
          <p class="mt-3 text-sm fg-muted">Última actualización: {{ updated }}</p>
        </header>

        <div class="space-y-6 fg-secondary">
          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">1. Aceptación</h2>
            <p>
              Al descargar, instalar o usar Dolarify, aceptas estos términos. Si no estás de acuerdo, no uses la app.
            </p>
          </section>

          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">2. Descripción del servicio</h2>
            <p>
              Dolarify es una calculadora de divisas que muestra tasas de cambio referenciales del BCV y Binance P2P.
              <strong class="fg">No es una casa de cambio, no realiza operaciones financieras ni仲介 con dinero real.</strong>
            </p>
          </section>

          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">3. Precisión de las tasas</h2>
            <p>
              Las tasas mostradas son referenciales y pueden no reflejar el precio real al que puedes comprar o vender divisas.
              Te recomendamos verificar en las fuentes oficiales antes de realizar cualquier operación.
              <strong class="fg">No nos hacemos responsables por decisiones financieras basadas en la información de la app.</strong>
            </p>
          </section>

          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">4. Uso aceptable</h2>
            <p>Te comprometes a usar Dolarify solo para fines personales y lícitos. No puedes:</p>
            <ul class="ml-6 list-disc space-y-2">
              <li>Revender, redistribuir o explotar comercialmente la app sin autorización.</li>
              <li>Intentar ingeniería inversa, descompilar o extraer el código fuente.</li>
              <li>Usar la app para actividades ilegales o fraudulentas.</li>
            </ul>
          </section>

          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">5. Propiedad intelectual</h2>
            <p>
              Dolarify, su logo, diseño y código son propiedad de sus creadores y están protegidos por las leyes de propiedad intelectual.
              Las tasas y datos son propiedad de sus respectivas fuentes (BCV, Binance).
            </p>
          </section>

          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">6. Limitación de responsabilidad</h2>
            <p>Dolarify se proporciona "tal cual", sin garantías de ningún tipo. No garantizamos:</p>
            <ul class="ml-6 list-disc space-y-2">
              <li>Disponibilidad ininterrumpida del servicio.</li>
              <li>Precisión absoluta de las tasas en todo momento.</li>
              <li>Ausencia de errores o interrupciones.</li>
            </ul>
            <p>
              En ningún caso los creadores de Dolarify serán responsables por daños directos, indirectos o consecuentes derivados del uso de la app.
            </p>
          </section>

          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">7. Modificaciones</h2>
            <p>
              Podemos modificar o descontinuar la app en cualquier momento. Te notificaremos cambios importantes a través de la app o esta web.
            </p>
          </section>

          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">8. Ley aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de la República Bolivariana de Venezuela. Cualquier disputa se resolverá en los tribunales competentes de Caracas.
            </p>
          </section>

          <section>
            <h2 class="mb-3 font-display text-xl font-semibold fg md:text-2xl">9. Contacto</h2>
            <p>
              Para preguntas sobre estos términos, escríbenos a
              <a href="mailto:soporte@dolarify.app" class="text-gold-light underline">soporte&#64;dolarify.app</a>.
            </p>
          </section>
        </div>
      </div>
    </article>
  `,
  styles: [],
})
export class TermsComponent {
  protected readonly updated = lastUpdated;
}
