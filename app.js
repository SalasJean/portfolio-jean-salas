// Ejemplo simple: alerta al hacer clic en un skill
document.querySelectorAll(".skills span").forEach(skill => {
    skill.addEventListener("click", () => {
        alert(`Habilidad seleccionada: ${skill.textContent}`);
    });
});
