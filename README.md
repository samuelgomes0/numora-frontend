# Finanças Pessoais

Uma aplicação moderna de gestão financeira pessoal desenvolvida com Next.js, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- **Dashboard Financeiro**: Visualização completa do saldo, receitas, despesas e economias
- **Gestão de Transações**: Registro e categorização de todas as transações financeiras
- **Gráficos Interativos**: Análise visual de receitas vs despesas ao longo do tempo
- **Categorização**: Organização automática por categorias (Alimentação, Transporte, Moradia, etc.)
- **Controle de Orçamento**: Acompanhamento de limites de gastos por categoria
- **Múltiplas Formas de Pagamento**: Suporte a cartões, dinheiro, transferências, PIX, etc.

## 🛠️ Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI modernos
- **Recharts** - Gráficos interativos
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas
- **Lucide React** - Ícones modernos

## 📊 Métricas Principais

- **Saldo Total**: Visão geral de todas as contas
- **Receitas do Mês**: Total de entradas financeiras
- **Despesas do Mês**: Total de gastos realizados
- **Economias**: Valor poupado mensalmente

## 🎨 Interface

- Design responsivo e moderno
- Tema claro/escuro
- Sidebar navegável
- Tabelas interativas com drag & drop
- Gráficos em tempo real

## 🚀 Como Executar

1. **Clone o repositório**

   ```bash
   git clone [url-do-repositorio]
   cd financas-pessoais
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute em modo de desenvolvimento**

   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:3000
   ```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── (private)/
│   │   └── dashboard/          # Dashboard principal
│   └── (public)/
│       ├── login/             # Página de login
│       └── signup/            # Página de cadastro
├── components/
│   ├── ui/                    # Componentes base
│   ├── AppSidebar/            # Sidebar da aplicação
│   ├── ChartAreaInteractive/  # Gráficos interativos
│   ├── DataTable/             # Tabela de transações
│   └── SectionCards/          # Cards de métricas
├── hooks/                     # Hooks customizados
├── lib/                       # Utilitários
├── schemas/                   # Validações Zod
└── utils/                     # Funções utilitárias
```

## 🎯 Próximas Funcionalidades

- [ ] Integração com APIs bancárias
- [ ] Notificações de vencimentos
- [ ] Relatórios detalhados
- [ ] Metas financeiras
- [ ] Backup automático
- [ ] Modo offline

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de submeter um pull request.

---

Desenvolvido com ❤️ para ajudar no controle financeiro pessoal.
