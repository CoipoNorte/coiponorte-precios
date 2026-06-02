import './PricingSection.css'

export default function PricingSection({ section }) {
  const { id, emoji, title, description, color, items, subsections, plans, surcharges, rates } = section

  return (
    <section id={id} className={`pricing-section pricing-section--${color}`}>
      <div className="container">

        <div className="pricing-section__header">
          <span className="pricing-section__emoji" aria-hidden="true">{emoji}</span>
          <div>
            <h2 className="section-title">{title}</h2>
            {description && <p className="section-subtitle">{description}</p>}
          </div>
        </div>

        {/* Standard items */}
        {items && (
          <div className="pricing-table">
            <div className="pricing-table__head">
              <span>Servicio</span>
              <span>Precio (CLP)</span>
            </div>
            {items.map((item, i) => (
              <div
                className="pricing-table__row"
                key={i}
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <span className="pricing-table__service">{item.service}</span>
                <span className="pricing-table__price">{item.price}</span>
              </div>
            ))}
          </div>
        )}

        {/* Subsections (Web) */}
        {subsections && (
          <div className="pricing-subsections">
            {subsections.map((sub, si) => (
              <div className="pricing-subsection" key={si}>
                <h3 className="pricing-subsection__title">{sub.subtitle}</h3>
                <div className="pricing-table">
                  <div className="pricing-table__head">
                    <span>Servicio</span>
                    <span>Precio (CLP)</span>
                  </div>
                  {sub.items.map((item, i) => (
                    <div className="pricing-table__row" key={i}>
                      <span className="pricing-table__service">{item.service}</span>
                      <span className="pricing-table__price">{item.price}</span>
                    </div>
                  ))}
                </div>
                {sub.note && (
                  <div className="pricing-subsection__note">
                    {sub.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Plans (Empresas) */}
        {plans && (
          <div className="pricing-plans">
            {plans.map((p, i) => (
              <div className={`plan-card plan-card--${i}`} key={i}>
                <div className="plan-card__header">
                  <span className="plan-card__name">{p.plan}</span>
                  <span className="plan-card__detail">{p.detail}</span>
                </div>
                <div className="plan-card__price">{p.price}</div>
              </div>
            ))}
          </div>
        )}

        {/* Surcharges + Rates */}
        {surcharges && (
          <div className="pricing-extra">
            <div className="surcharges">
              <h3 className="pricing-extra__subtitle">⚡ Recargos Adicionales</h3>
              <div className="pricing-table">
                <div className="pricing-table__head">
                  <span>Situación</span>
                  <span>Recargo</span>
                </div>
                {surcharges.map((s, i) => (
                  <div className="pricing-table__row" key={i}>
                    <span className="pricing-table__service">{s.situation}</span>
                    <span className={`pricing-table__badge pricing-table__badge--${s.color}`}>
                      {s.surcharge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {rates && (
              <div className="base-rates">
                <h3 className="pricing-extra__subtitle">💰 Tarifas Base por Hora</h3>
                <div className="pricing-table">
                  <div className="pricing-table__head">
                    <span>Tipo de Servicio</span>
                    <span>Valor / Hora</span>
                  </div>
                  {rates.map((r, i) => (
                    <div className="pricing-table__row" key={i}>
                      <span className="pricing-table__service">{r.type}</span>
                      <span className="pricing-table__price">{r.rate}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  )
}