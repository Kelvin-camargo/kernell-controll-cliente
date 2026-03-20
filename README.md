# Kernell Controll — Mapa de Backbone

Monitor visual de infraestrutura de rede para ISPs. Permite desenhar rotas de backbone sobre mapa real (OpenStreetMap / CartoDB), posicionar POPs, monitorar status em tempo real e simular tráfego.

---

## Stack

| Tecnologia       | Versão    |
|------------------|-----------|
| Next.js          | 16.1.7    |
| React            | 19.0      |
| react-leaflet    | 5.0.0     |
| leaflet          | 1.9.4     |
| Zustand          | 5.0.3     |
| Tailwind CSS     | 3.4.x     |
| TypeScript       | 5.7.x     |

---

## Instalação

```bash
# 1. Instale as dependências
npm install

# 2. Rode em desenvolvimento
npm run dev

# 3. Acesse
open http://localhost:3000
```

---

## Funcionalidades

### 🗺️ Mapa
- **Tiles CartoDB Dark Matter** — visual profissional estilo "command center"
- **Troca de camada**: Dark | Satélite | Sem labels
- **Fly-to animado** ao clicar em um item no sidebar
- **Auto-fit** na inicialização e botão "ajustar ao mapa"

### 📍 POPs (Pontos de Presença)
- **Adicionar** clicando no botão "Adicionar POP" e depois no mapa
- **Ícone SVG customizado** com anel de glow colorido por status
- **Status**: Ativo (verde) · Alerta (amarelo) · Inativo (vermelho)
- Popup no mapa com edição de status e remoção
- Painel de detalhes com coordenadas e endereço

### 🔌 Rotas de Backbone
- **Desenhar** clicando em "Desenhar Rota" e clicando no mapa para cada waypoint
- **Duplo clique** para finalizar e abrir o dialog de criação
- **Preview em tempo real** da rota enquanto o mouse se move
- Cálculo automático da distância em km (haversine)
- Métricas: Download/Upload em Gbps com barra de utilização

### 📊 Painéis
| Painel         | Posição          | Conteúdo                                     |
|----------------|------------------|----------------------------------------------|
| Sidebar        | Esquerda         | Lista de POPs e Rotas, busca, status badges  |
| Stats          | Inferior direito | Total km, down/up Gbps, ativos/alertas       |
| Alerts         | Inferior esquerdo| Itens offline e em alerta                    |
| Detail Panel   | Direita (slide)  | Métricas detalhadas do item selecionado      |

### 🔴 Simulação de Tráfego
- Ative pelo botão **Activity** nos controles do mapa
- Varia down/upload de rotas ativas a cada 2 segundos
- Alterna POPs ativos para "alerta" brevemente (6% de chance por ciclo)
- Útil para demo e apresentações

---

## Estrutura de Arquivos

```
src/
├── app/
│   ├── layout.tsx         # Root layout + fontes Google
│   ├── page.tsx           # Página principal
│   └── globals.css        # Tema dark, Leaflet overrides, animações
├── components/
│   ├── BackboneMap.tsx    # Mapa Leaflet + drawing + fly-to + simulação
│   ├── MapControls.tsx    # Controles flutuantes (layers, fit, sim)
│   ├── DetailPanel.tsx    # Painel deslizante de detalhes
│   ├── SidePanel.tsx      # Sidebar com lista de POPs e rotas
│   ├── Topbar.tsx         # Cabeçalho com logo e busca
│   ├── StatsPanel.tsx     # Estatísticas gerais
│   ├── AlertsPanel.tsx    # Painel de alertas/inativos
│   ├── DrawingToolbar.tsx # Botões de desenho
│   ├── CreateDialog.tsx   # Modal para criar POP ou Rota
│   ├── POPPopup.tsx       # Popup do marcador de POP
│   └── RoutePopup.tsx     # Popup da polyline de rota
├── store/
│   └── backboneStore.ts   # Zustand — estado global
├── data/
│   └── sampleData.ts      # POPs e rotas de exemplo (Florianópolis)
└── types/
    └── index.ts           # Tipos TypeScript (POP, Route, Status…)
```

---

## Como Adicionar Dados Reais

### Via interface
1. Clique **"Adicionar POP"** na toolbar inferior → clique no mapa → preencha o dialog
2. Clique **"Desenhar Rota"** → clique nos waypoints → duplo clique para finalizar

### Via `sampleData.ts`
Edite `/src/data/sampleData.ts` com seus POPs e coordenadas reais:

```ts
export const initialPOPs: POP[] = [
  {
    id: "pop-central",
    name: "POP CENTRAL",
    lat: -27.5954,
    lng: -48.5480,
    status: "active",
    description: "Ponto principal de troca de tráfego",
    address: "Centro, Florianópolis - SC",
  },
  // ...
];
```

---

## Integração com Zabbix (próximo passo)

O estado global (Zustand) está preparado para receber dados via API. Exemplo de integração:

```ts
// Em um hook de polling
async function syncFromZabbix() {
  const hosts = await zabbixApi("host.get", { output: ["hostid", "name", "status"] });
  hosts.forEach((h) => {
    useBackboneStore.getState().updatePOP(h.hostid, {
      status: h.status === "0" ? "active" : "inactive",
    });
  });
}

setInterval(syncFromZabbix, 30_000);
```

---

## Personalização

### Trocar tile layer padrão
Em `BackboneMap.tsx`, altere o estado inicial:
```ts
const [tileLayer, setTileLayer] = useState<"dark" | "satellite" | "terrain">("dark");
```

### Adicionar novo tile provider
Em `MapControls.tsx`, adicione à constante `tileLayers`:
```ts
export const tileLayers = {
  // ...
  osm: {
    label: "OpenStreetMap",
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
};
```

### Mudar região inicial
Em `BackboneMap.tsx`, altere `center` e `zoom`:
```tsx
<MapContainer center={[-23.5505, -46.6333]} zoom={11} ...>
```

---

## Build para Produção

```bash
npm run build
npm start
```

> **Deploy recomendado**: Vercel (zero config com Next.js 16)
> ```bash
> npx vercel --prod
> ```
