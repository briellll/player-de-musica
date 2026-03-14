# 🎵 Music Player - Full Stack Journey

Este é um projeto de um reprodutor de música responsivo, desenvolvido como parte da minha migração para o desenvolvimento Full Stack. O foco principal foi o domínio de manipulação de DOM, gerenciamento de estados com JavaScript e estilização com CSS.

## 🚀 Tecnologias Utilizadas

* **HTML5**: Estruturação semântica.
* **CSS3**:
    * Flexbox para alinhamento e centralização.
    * Estilização avançada de `input type="range"` usando prefixos Webkit.
* **JavaScript (ES6+)**:
    * Manipulação de eventos de áudio (`timeupdate`, `loadedmetadata`).
    * Lógica de navegação de playlist com Array de Objetos.
    * Cálculos dinâmicos de progresso e formatação de strings com `padStart`.

## 🛠️ Funcionalidades

* **Controle de Reprodução**: Play e Pause sincronizados com ícones dinâmicos.
* **Navegação de Playlist**: Botões "Próximo" e "Anterior" com lógica de ciclo infinito.
* **Barra de Progresso Interativa**: Permite que o usuário pule para qualquer parte da música clicando/arrastando.
* **Sincronização em Tempo Real**: O tempo da música e a barra de progresso são atualizados em tempo real conforme o áudio.

## 📂 Estrutura do Projeto

```text
├── assets/
│   ├── images/     # Capas dos álbuns e ícones SVG
│   └── sound/      # Arquivos de áudio (.mp3)
├── index.html      # Estrutura principal
├── style.css       # Estilização e efeitos visuais
└── script.js       # Lógica e motor do player