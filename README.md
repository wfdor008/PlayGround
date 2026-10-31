# FERALIS · Batalha Livre

Um RPG de ação 3D em mundo aberto, jogável no navegador. Cace feras procedurais, encadeie golpes de lâmina, esquive e sele criaturas para lutarem ao seu lado.

Inspirado na fantasia de colecionar criaturas, mas com combate **hack & slash em tempo real** — sem turnos, sem telas de espera. Todos os modelos, texturas, cenários e sons são gerados em tempo de execução; o projeto não usa assets externos.

## Jogar

```bash
npm install
npm run dev
```

Abra `http://localhost:3002`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## O que tem no jogo

- **Mundo aberto contínuo de 440 m** com cinco regiões, trilhas, altares e a Árvore do Coração.
- **Seis espécies originais**: Brasalume, Aquari, Musgo, Pedral, Zephyro e Umbra.
- **Combate em tempo real**: combo de três golpes, ataque pesado, esquiva com invulnerabilidade, vigor, lock-on, hitstop e tremor de câmera.
- **Selamento**: enfraqueça uma fera abaixo de 40% de vida e lance o Selo. A chance depende do HP e do nível.
- **Companheiros**: feras seladas entram na matilha (até 6) e lutam sozinhas ao seu lado.
- **Três Guardiões** em altares espalhados pelo mapa, cada um com fases e ataques telegrafados.
- **Progressão**: XP, níveis, vida, dano, essências e drops.
- **Interface em português**, com HUD responsivo, minimapa, bússola, diário de campo e suporte a toque.

## Controles

### Teclado e mouse

| Ação | Controle |
| --- | --- |
| Mover | `WASD` |
| Olhar | Arraste com o mouse |
| Golpe | Clique |
| Golpe pesado | Clique com o botão direito |
| Esquivar | `Espaço` |
| Selar | `E` |
| Mirar / lock-on | `Q` |
| Invocar companheiro | `C` |
| Interagir com altar | `F` |
| Pausar | `Esc` |

### Toque

- Joystick virtual para mover.
- Arraste na tela para olhar.
- Botões para atacar, golpe pesado, esquivar, mirar, selar, invocar e pausar.
- Toque no cartão de objetivo para abrir o diário de campo.

## Tecnologia

- [Vite](https://vitejs.dev/) + [Three.js](https://threejs.org/)
- Geometria, texturas, iluminação e áudio procedural
- Canvas 2D para minimapa e HUD
- Sem backend: todo o progresso acontece na sessão do navegador

## Estrutura

```text
src/
  main.js        loop principal, câmera, combate, selamento, guardiões e missões
  world.js       terreno, regiões, altares, árvore, ilhas e minimapa
  characters.js  modelos procedurais do caçador e das feras
  player.js      movimento, combos, esquiva, vigor e progressão
  creatures.js   IA selvagem, guardiões, captura e companheiros
  input.js       teclado, mouse, toque e gamepad
  ui.js          HUD, diário, minimapa, alvos e overlays
  fx.js          partículas, projéteis, rastros e números de dano
  engine.js      utilidades, texturas, áudio e matemática
```

---

Criado com [OMGithub](https://omgithub.com). [Abrir projeto](https://omgithub.com/wfdor008/PlayGround) · [Remixar](https://omgithub.com/?remix=wfdor008%2FPlayGround) · [Código](https://github.com/wfdor008/PlayGround)
