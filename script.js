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
  ["◇", "Qualidade", "Equipamentos e processos pensados para desempenho consistente."],
  ["✓", "Confiança", "Relacionamento técnico e comercial com clareza em cada etapa."],
  ["○", "Transparência", "Informação organizada para facilitar decisões de compra."],
  ["◎", "Respeito ao cliente", "Atendimento próximo, cuidadoso e orientado à solução."],
  ["✦", "Inovação", "Modernização contínua em produtos, comunicação e suporte."],
  ["↗", "Melhoria contínua", "Evolução constante para entregar mais eficiência ao mercado."],
];

const featuredProducts = [
  {
    name: "Bombas Hidráulicas Série ADO",
    text: "Indicada para banheiras, ofurôs e spas, com alta durabilidade e excelente desempenho.",
    image: "produto-bomba-ado.png",
  },
  {
    name: "Bombas Hidráulicas Série CA",
    text: "Compacta, econômica e de fácil instalação, ideal para diferentes aplicações hidráulicas.",
    image: "produto-bomba-ca.png",
  },
  {
    name: "Bombas Hidráulicas Série CAE",
    text: "Solução compacta e eficiente para instalações que exigem praticidade e confiabilidade.",
    image: "produto-bomba-cae.png",
  },
  {
    name: "Bombas Hidráulicas Série CB",
    text: "Com motores de alta potência, indicada para aplicações que exigem maior rendimento.",
    image: "produto-bomba-cb.png",
  },
  {
    name: "Bombas Hidráulicas Série CD",
    text: "Ideal para abastecimento de instalações de pequeno e médio porte e pressurização de redes.",
    image: "produto-bomba-cd.png",
  },
  {
    name: "Bombas Hidráulicas Série CF",
    text: "Desenvolvida para aplicações de combate a incêndio e conexões específicas.",
    image: "produto-bomba-cf.png",
  },
  {
    name: "Filtros Hidráulicos / Tratamento de Água",
    text: "Soluções para melhorar a qualidade da água em residências, condomínios, comércios e indústrias.",
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

const pumpCatalogDetails = {
  ADO: {
    image: "produto-bomba-ado.png",
    category: "Banheiras, ofurôs e spas",
  },
  CA: {
    image: "produto-bomba-ca.png",
    category: "Aplicações hidráulicas gerais",
  },
  CAE: {
    image: "produto-bomba-cae.png",
    category: "Instalações compactas",
  },
  CB: {
    image: "produto-bomba-cb.png",
    category: "Maior vazão e rendimento",
  },
  CD: {
    image: "produto-bomba-cd.png",
    category: "Abastecimento e pressurização",
  },
  CF: {
    image: "produto-bomba-cf.png",
    category: "Combate a incêndio",
  },
};

const filters = [
  {
    name: "Série FAPI",
    text: "Produzido em aço inox, projetado para tratamento de água potável, com opções de cargas filtrantes ou cartuchos.",
    image: "filtro-fapi.png",
  },
  {
    name: "Série PA, PC e PM",
    text: "Produzidos em aço carbono, ideais para tratamento de água de uso industrial.",
    image: "filtro-pa-pc-pm.png",
  },
  {
    name: "Filtro de Gotejamento",
    text: "Fornece água limpa a partir de rios, lagos e lagoas, evitando sedimentos em suspensão.",
    image: "filtro-gotejamento.png",
  },
  {
    name: "Separador Hidrociclone",
    text: "Projetado para separar areia e lama de poços e rios, prolongando a vida útil dos filtros seguintes.",
    image: "separador-hidrociclone.png",
  },
  {
    name: "Série DLP",
    text: "Filtro para piscina em polietileno rotomoldado, anticorrosivo e com tanque monobloco sem emendas.",
    image: "filtro-dlp.png",
  },
  {
    name: "Casa de Máquinas",
    text: "Produto com encanamento embutido e acionador anti-choque, facilitando a manutenção.",
    image: "casa-de-maquinas.png",
  },
  {
    name: "Série DFL",
    text: "Filtro em fibra de vidro com estrutura reforçada e maior durabilidade.",
    image: "filtro-dfl.png",
  },
  {
    name: "Série D",
    text: "Indicada para piscinas olímpicas e grandes volumes de água.",
    image: "filtro-dfl.png",
  },
  {
    name: "Sistema de Pressurização",
    text: "Sistema pneumático capaz de pressurizar a água com força equivalente a um reservatório posicionado a 20 metros de altura.",
    image: "sistema-pressurizacao.png",
  },
  {
    name: "DRKFEST",
    text: "Sistema de esterilização física da água por meio da destruição do DNA de microrganismos.",
    image: "drkfest.png",
  },
];

const regions = [
  ["Região Norte", "Amazonas, Roraima, Amapá, Pará, Tocantins, Rondônia e Acre."],
  ["Região Nordeste", "Maranhão, Piauí, Ceará, Rio Grande do Norte, Pernambuco, Paraíba, Sergipe, Alagoas e Bahia."],
  ["Região Centro-Oeste", "Mato Grosso, Mato Grosso do Sul, Goiás e Distrito Federal."],
  ["Região Sudeste", "São Paulo, Rio de Janeiro, Espírito Santo e Minas Gerais."],
  ["Região Sul", "Paraná, Rio Grande do Sul e Santa Catarina."],
];

const assistance = [
  {
    name: "JJ Manutenções Desentupidora e Hidrojato LTDA",
    address: "Q QE 40 Conjunto C Lote 13, S/N, Guará II, Brasília-DF, CEP 71070-400",
    contact: "João",
    email: "joaomotorei@gmail.com",
    phone: "(61) 9905-6644",
  },
  {
    name: "Eletro Dinâmica Automação Motores e Equipamentos",
    address: "SOF Sul/QD 03, Conjunto A, Lote 16, CEP 71215-216, Guará-DF",
    contact: "Sra. Maiara Silva",
    email: "maiara@eletrodinamicamotores.com.br",
    phone: "(61) 3233-2179 / (61) 3573-4260 / (61) 99506-5839",
  },
  {
    name: "AGG Eletromotores",
    address: "Av. Inocêncio Serafico, nº 455, CEP 06320-290, Carapicuíba-SP",
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
        <a class="text-link" href="#contato">Ver detalhes →</a>
      </div>
    </article>
  `;
}

function filterCard(item, index) {
  const categories = [
    "Tratamento de Água",
    "Tratamento Industrial",
    "Irrigação",
    "Separação de Sedimentos",
    "Piscinas",
    "Casa de Máquinas",
    "Fibra de Vidro",
    "Grandes Volumes",
    "Pressurização",
    "Esterilização",
  ];

  return `
    <article class="product-card filter-card">
      <div class="filter-card-top">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${categories[index] || "Solução DRK"}</strong>
      </div>
      <div class="product-body">
        <h3>${item.name}</h3>
        <p>${item.text}</p>
        <a class="text-link" href="#contato">Solicitar aplicação →</a>
      </div>
    </article>
  `;
}

function pumpCard(series) {
  const detail = pumpCatalogDetails[series] || {
    image: "produto-bomba-ca.png",
    category: "Consulta técnica e comercial",
  };

  return `
    <a class="pump-card" href="#contato" aria-label="Solicitar informações da Série ${series}">
      <span class="pump-card-media">
        <img src="${imagePath(detail.image)}" alt="Bomba hidráulica Série ${series}" loading="lazy" />
      </span>
      <span class="pump-card-body">
        <small>Série ${series}</small>
        <strong>${detail.category}</strong>
        <em>Ver detalhes →</em>
      </span>
    </a>
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
  document.querySelector("#filterCatalog").innerHTML = filters.map(filterCard).join("");

  document.querySelector("#pumpCatalog").innerHTML = pumpSeries
    .map(pumpCard)
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
          <p><strong>Endereço:</strong><br />${item.address}</p>
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
    if (link.textContent.toLowerCase().includes("catálogo")) {
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
