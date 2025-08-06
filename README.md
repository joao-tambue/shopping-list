# 🛒 Shopping List App

Aplicativo de Lista de Compras desenvolvido com **React Native + Expo**, com persistência local usando `AsyncStorage`.

> Este projeto faz parte de um teste técnico, avaliando navegação, gerenciamento de estado, componentização, UX e armazenamento offline.

---

## 🚀 Funcionalidades

- Listagem de produtos com checkbox de "comprado"
- Adição de novo item (nome + quantidade)
- Remoção de item da lista
- Armazenamento persistente com AsyncStorage
- Interface simples, fluida e responsiva
- Arquitetura modular e escalável

---

## 🛠️ Tecnologias e Bibliotecas

- [Expo SDK](https://docs.expo.dev/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/)
- [react-native-uuid](https://www.npmjs.com/package/react-native-uuid)

---

## 📂 Estrutura de Pastas

```
src/
├── components/         # Componentes reutilizáveis
│   └── ItemCard.tsx
├── navigation/         # Sistema de rotas
│   └── index.tsx
├── screens/            # Telas do app
│   ├── HomeScreen.tsx
│   └── AddItemScreen.tsx
├── services/           # Serviços de armazenamento
│   └── storage.ts
└── types/              # Tipagens e modelos
    └── item.ts
```

---

## 📱 Preview

| Lista de Compras | Adicionar Item |
|------------------|----------------|
| ![home](https://via.placeholder.com/200x400?text=Home+Screen) | ![add](https://via.placeholder.com/200x400?text=Add+Item+Screen) |

> (Substituir por prints reais depois)

---

## 📦 Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/shopping-list.git
cd shopping-list
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Rode o projeto com Expo

```bash
npx expo start
```

O Expo abrirá um QR Code no terminal ou navegador.  
Basta escanear com o app [Expo Go](https://expo.dev/client) no seu celular.

---

## 🧑‍💻 Autor

**João Tambue**  
Frontend & Mobile Developer  
[LinkedIn](https://www.linkedin.com/in/joao-tambue)

---

## 📄 Licença

Este projeto está sob a licença MIT.
