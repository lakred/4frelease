window.changeBackgroundImage = (elementId, imageUrl) => {
    const element = document.getElementById(elementId);
    element.style.backgroundImage = `url('${imageUrl}')`;
};