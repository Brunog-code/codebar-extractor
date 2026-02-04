# 📑 Barcode Extractor

👉 **[Acesse o projeto aqui](https://codebar-extractor.vercel.app/)**

Aplicação web para extração automática do código de barras de boletos bancários a partir de arquivos **PDF** ou **imagem**. O usuário faz o upload do boleto e recebe o código de barras pronto para copiar e colar no pagamento, eliminando erros de digitação.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia      | Badge                                                                                                              |
| :-------------- | :----------------------------------------------------------------------------------------------------------------- |
| **Next.js**     | ![Next.js](https://img.shields.io/badge/Next.js-000?style=flat-square&logo=nextdotjs&logoColor=white)              |
| **TypeScript**  | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)    |
| **TailwindCSS** | ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white) |

---

## 🎯 Objetivo do Projeto

Facilitar o pagamento de boletos bancários, extraindo o código de barras de arquivos enviados pelo usuário:

1. O usuário faz upload de um **PDF** ou **imagem** do boleto
2. O sistema processa o arquivo e extrai o código de barras
3. O código é exibido para o usuário copiar e colar no app do banco

---

## ✨ Funcionalidades em Destaque

### 📤 Upload Inteligente

- Aceita arquivos **.pdf**, **.jpg**, **.jpeg** e **.png**
- Validação automática de formato
- Interface intuitiva e responsiva

### 🧠 Extração Automática

- Processamento do boleto e detecção do código de barras
- Exibição do código pronto para copiar


---

## 🏗️ Arquitetura do Projeto

- **Frontend:** Next.js + React + TypeScript + TailwindCSS
- **Upload:** Validação e preview de arquivos no frontend
- **Extração:** (Implementação futura) API para processamento e OCR do boleto

---
