(async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const coordsEl = document.querySelector('#user-coords');
            coordsEl.textContent = `${position.coords.latitude}, ${position.coords.longitude}`
            coordsEl.parentElement.classList.remove('invisible');
        });
    }
<<<<<<< HEAD
})();
=======
    // TODO: add custom logic here
})();
>>>>>>> 6c669e26030d5edcd81dd997b7be3c22d797b739
