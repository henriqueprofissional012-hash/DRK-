// DRK maintenance notes:
// 1. Replace commercial links in SETTINGS when WhatsApp, e-mail, catalog PDFs or product URLs change.
// 2. Replace files in assets/images using the same filenames to update photos without changing layout.
// 3. Add technical descriptions, PDFs and tables directly in the data arrays below when available.

const SETTINGS = {
  whatsappUrl: "https://wa.me/5511956983181",
  catalogUrl: "#produtos",
  email: "vendas@drkbombas.com.br",
};

const values = [
  ["â—‡", "Qualidade", "Equipamentos e processos pensados para desempenho consistente."],
  ["âœ“", "ConfianÃ§a", "Relacionamento tÃ©cnico e comercial com clareza em cada etapa."],
  ["â—‹", "TransparÃªncia", "InformaÃ§Ã£o organizada para facilitar decisÃµes de compra."],
  ["â—Ž", "Respeito ao cliente", "Atendimento prÃ³ximo, cuidadoso e orientado Ã  soluÃ§Ã£o."],
  ["âœ¦", "InovaÃ§Ã£o", "ModernizaÃ§Ã£o contÃ­nua em produtos, comunicaÃ§Ã£o e suporte."],
  ["â†—", "Melhoria contÃ­nua", "EvoluÃ§Ã£o constante para entregar mais eficiÃªncia ao mercado."],
];

const featuredProducts = [
  {
    name: "Bombas HidrÃ¡ulicas SÃ©rie ADO",
    text: "Indicada para banheiras, ofurÃ´s e spas, com alta durabilidade e excelente desempenho.",
    image: "produto-bomba-ado.png",
  },
  {
    name: "Bombas HidrÃ¡ulicas SÃ©rie CA",
    text: "Compacta, econÃ´mica e de fÃ¡cil instalaÃ§Ã£o, ideal para diferentes aplicaÃ§Ãµes hidrÃ¡ulicas.",
    image: "produto-bomba-ca.png",
  },
  {
    name: "Bombas HidrÃ¡ulicas SÃ©rie CAE",
    text: "SoluÃ§Ã£o compacta e eficiente para instalaÃ§Ãµes que exigem praticidade e confiabilidade.",
    image: "produto-bomba-cae.png",
  },
  {
    name: "Bombas HidrÃ¡ulicas SÃ©rie CB",
    text: "Com motores de alta potÃªncia, indicada para aplicaÃ§Ãµes que exigem maior rendimento.",
    image: "produto-bomba-cb.png",
  },
  {
    name: "Bombas HidrÃ¡ulicas SÃ©rie CD",
    text: "Ideal para abastecimento de instalaÃ§Ãµes de pequeno e mÃ©dio porte e pressurizaÃ§Ã£o de redes.",
    image: "produto-bomba-cd.png",
  },
  {
    name: "Bombas HidrÃ¡ulicas SÃ©rie CF",
    text: "Desenvolvida para aplicaÃ§Ãµes de combate a incÃªndio e conexÃµes especÃ­ficas.",
    image: "produto-bomba-cf.png",
  },
  {
    name: "Filtros HidrÃ¡ulicos / Tratamento de Ãgua",
    text: "SoluÃ§Ãµes para melhorar a qualidade da Ã¡gua em residÃªncias, condomÃ­nios, comÃ©rcios e indÃºstrias.",
    image: "produto-filtros.png",
  },
];

const pumpSeries = [
  "CWR",
  "CWV",
  "CY",
  "CD",
  "CF",
  "CV",
  "CR",
  "PHVD",
  "CFF",
  "CWS",
  "CWH",
  "CJ",
  "CWF",
  "CWD",
  "ADO",
  "CL",
  "CSA",
  "CB",
  "CE",
  "CWFF",
  "CH",
  "CA",
  "CFJ",
  "CWE",
  "CAE",
  "CYB",
  "CX",
  "CWJ",
  "CS",
  "CWX",
];

const filters = [
  {
    name: "SÃ©rie FAPI",
    text: "Produzido em aÃ§o inox, projetado para tratamento de Ã¡gua potÃ¡vel, com opÃ§Ãµes de cargas filtrantes ou cartuchos.",
    image: "filtro-fapi.png",
  },
  {
    name: "SÃ©rie PA, PC e PM",
    text: "Produzidos em aÃ§o carbono, ideais para tratamento de Ã¡gua de uso industrial.",
    image: "filtro-pa-pc-pm.png",
  },
  {
    name: "Filtro de Gotejamento",
    text: "Fornece Ã¡gua limpa a partir de rios, lagos e lagoas, evitando sedimentos em suspensÃ£o.",
    image: "filtro-gotejamento.png",
  },
  {
    name: "Separador Hidrociclone",
    text: "Projetado para separar areia e lama de poÃ§os e rios, prolongando a vida Ãºtil dos filtros seguintes.",
    image: "separador-hidrociclone.png",
  },
  {
    name: "SÃ©rie DLP",
    text: "Filtro para piscina em polietileno rotomoldado, anticorrosivo e com tanque monobloco sem emendas.",
    image: "filtro-dlp.png",
  },
  {
    name: "Casa de MÃ¡quinas",
    text: "Produto com encanamento embutido e acionador anti-choque, facilitando a manutenÃ§Ã£o.",
    image: "casa-de-maquinas.png",
  },
  {
    name: "SÃ©rie DFL",
    text: "Filtro em fibra de vidro com estrutura reforÃ§ada e maior durabilidade.",
    image: "filtro-dfl.png",
  },
  {
    name: "SÃ©rie D",
    text: "Indicada para piscinas olÃ­mpicas e grandes volumes de Ã¡gua.",
    image: "produto-filtros.png",
  },
  {
    name: "Sistema de PressurizaÃ§Ã£o",
    text: "Sistema pneumÃ¡tico capaz de pressurizar a Ã¡gua com forÃ§a equivalente a um reservatÃ³rio posicionado a 20 metros de altura.",
    image: "sistema-pressurizacao.png",
  },
  {
    name: "DRKFEST",
    text: "Sistema de esterilizaÃ§Ã£o fÃ­sica da Ã¡gua por meio da destruiÃ§Ã£o do DNA de microrganismos.",
    image: "drkfest.png",
  },
];

const regions = [
  ["RegiÃ£o Norte", "Amazonas, Roraima, AmapÃ¡, ParÃ¡, Tocantins, RondÃ´nia e Acre."],
  ["RegiÃ£o Nordeste", "MaranhÃ£o, PiauÃ­, CearÃ¡, Rio Grande do Norte, Pernambuco, ParaÃ­ba, Sergipe, Alagoas e Bahia."],
  ["RegiÃ£o Centro-Oeste", "Mato Grosso, Mato Grosso do Sul, GoiÃ¡s e Distrito Federal."],
  ["RegiÃ£o Sudeste", "SÃ£o Paulo, Rio de Janeiro, EspÃ­rito Santo e Minas Gerais."],
  ["RegiÃ£o Sul", "ParanÃ¡, Rio Grande do Sul e Santa Catarina."],
];

const assistance = [
  {
    name: "JJ ManutenÃ§Ãµes Desentupidora e Hidrojato LTDA",
    address: "Q QE 40 Conjunto C Lote 13, S/N, GuarÃ¡ II, BrasÃ­lia-DF, CEP 71070-400",
    contact: "JoÃ£o",
    email: "joaomotorei@gmail.com",
    phone: "(61) 9905-6644",
  },
  {
    name: "Eletro DinÃ¢mica AutomaÃ§Ã£o Motores e Equipamentos",
    address: "SOF Sul/QD 03, Conjunto A, Lote 16, CEP 71215-216, GuarÃ¡-DF",
    contact: "Sra. Maiara Silva",
    email: "maiara@eletrodinamicamotores.com.br",
    phone: "(61) 3233-2179 / (61) 3573-4260 / (61) 99506-5839",
  },
  {
    name: "AGG Eletromotores",
    address: "Av. InocÃªncio Serafico, nÂº 455, CEP 06320-290, CarapicuÃ­ba-SP",
    contact: "Sr. Antonio Pedroso",
    email: "contato@aggeletromotores.com.br",
    phone: "(11) 4374-0849 / (11) 98731-7850",
  },
];

const imagePath = (name) => `assets/images/${name}`;

function productCard(item) {
  return `
    <article class="product-card">
      <div class="product-media">
        <img src="${imagePath(item.image)}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="product-body">
        <h3>${item.name}</h3>
        <p>${item.text}</p>
        <a class="text-link" href="#contato">Ver detalhes â†’</a>
      </div>
    </article>
  `;
}

function renderContent() {
  document.querySelector("#valuesGrid").innerHTML = values
    .map(
      ([icon, title, text]) => `
        <article class="value-card">
          <span aria-hidden="true">${icon}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");

  document.querySelector("#featuredProducts").innerHTML = featuredProducts.map(productCard).join("");
  document.querySelector("#filterCatalog").innerHTML = filters.map(productCard).join("");

  document.querySelector("#pumpCatalog").innerHTML = pumpSeries
    .map(
      (series) => `
        <a class="catalog-chip" href="#contato" aria-label="Solicitar informacoes da Serie ${series}">
          <span>Serie ${series}</span>
          <strong>Consultar</strong>
        </a>
      `,
    )
    .join("");

  document.querySelector("#regionsGrid").innerHTML = regions
    .map(
      ([name, states]) => `
        <article class="region-card">
          <h3>${name}</h3>
          <p>${states}</p>
        </article>
      `,
    )
    .join("");

  document.querySelector("#assistanceGrid").innerHTML = assistance
    .map(
      (item) => `
        <article class="assistance-card">
          <h3>${item.name}</h3>
          <p><strong>EndereÃ§o:</strong><br />${item.address}</p>
          <p><strong>Contato:</strong> ${item.contact}</p>
          <p><strong>E-mail:</strong> ${item.email}</p>
          <p><strong>Telefone:</strong> ${item.phone}</p>
          <a class="btn btn-outline" href="mailto:${item.email}">Entrar em contato</a>
        </article>
      `,
    )
    .join("");
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  const links = menu.querySelectorAll("a");

  toggle.addEventListener("click", () => {
    const isOpen = toggle.classList.toggle("is-open");
    menu.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("is-open");
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}

function setupReveal() {
  const sections = document.querySelectorAll(".section-reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  sections.forEach((section) => observer.observe(section));
}

function syncCommercialLinks() {
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
    link.href = SETTINGS.whatsappUrl;
  });

  document.querySelectorAll('a[href="#produtos"]').forEach((link) => {
    if (link.textContent.toLowerCase().includes("catÃ¡logo")) {
      link.href = SETTINGS.catalogUrl;
    }
  });
}

function setupMotion() {
  const hero = document.querySelector(".hero");
  const depth = document.querySelector(".hero-depth");
  if (!hero || !depth) return;

  let ticking = false;
  const update = () => {
    const y = Math.min(window.scrollY, 520);
    const lift = y * -0.045;
    const zoom = 152 + y * 0.018;
    if (window.matchMedia("(max-width: 820px)").matches) {
      hero.style.backgroundSize = `${Math.min(zoom, 166)}% auto`;
    } else {
      hero.style.backgroundSize = `auto ${Math.max(88, 92 - y * 0.018)}%`;
    }
    depth.style.transform = `translate3d(0, ${lift}px, 0) rotateX(${Math.min(y * 0.018, 8)}deg)`;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
  update();
}

renderContent();
setupMenu();
setupReveal();
syncCommercialLinks();
setupMotion();
