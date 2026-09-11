JavaScript


document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.querySelector(".like-btn");
    const postMedia = document.querySelector(".post-media");
    if (!likeBtn) return;

    const likesCountSpan = likeBtn.querySelector(".likes-count");
    const bookmarkBtn = document.querySelector(".bookmark-btn");

    let isLiked = false;
    let baseLikes = 1200; // Valor inicial correspondente ao HTML

    // Formata números grandes (ex: 1000 -> 1.0K)
    function formatLikes(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + "K";
        }
        return num.toString();
    }

    // Inicializa o texto visual
    if (likesCountSpan) {
        likesCountSpan.textContent = formatLikes(baseLikes);
    }

    // Função para Incrementar a Curtida
    function addLike() {
        baseLikes++;
        isLiked = true;
        likeBtn.classList.add("liked");

        if (likesCountSpan) {
            likesCountSpan.textContent = formatLikes(baseLikes);
        }

        // Efeito visual de animação no coração
        const svg = likeBtn.querySelector("svg");
        if (svg) {
            svg.style.transform = "scale(1.4)";
            setTimeout(() => {
                svg.style.transform = "scale(1)";
            }, 150);
        }
    }

    // Evento de clique no BOTÃO DE CORAÇÃO (Alterna estado)
    likeBtn.addEventListener("click", (e) => {
        e.stopPropagation();

        if (isLiked) {
            isLiked = false;
            baseLikes = Math.max(0, baseLikes - 1);
            likeBtn.classList.remove("liked");
            if (likesCountSpan) {
                likesCountSpan.textContent = formatLikes(baseLikes);
            }
        } else {
            addLike();
        }
    });

    // Evento de clique na IMAGEM PRINCIPAL
    if (postMedia) {
        postMedia.addEventListener("click", (e) => {
            e.stopPropagation();
            addLike();
        });
    }

    // Evento no botão de SALVAR (Bookmark)
    if (bookmarkBtn) {
        let isBookmarked = false;
        bookmarkBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            isBookmarked = !isBookmarked;
            bookmarkBtn.classList.toggle("bookmarked", isBookmarked);

            const svg = bookmarkBtn.querySelector("svg");
            if (svg) {
                svg.style.transform = "scale(1.2)";
                setTimeout(() => {
                    svg.style.transform = "scale(1)";
                }, 150);
            }
        });
    }
});