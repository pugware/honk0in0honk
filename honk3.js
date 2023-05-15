javascript:(function(){
    var img = document.createElement('img');
    img.src = 'https://pugware.github.io/honk0in0honk/HONKimg/desktop-goose.png';
    img.style.position = 'fixed';
    img.style.bottom = '0px';
    img.style.right = '0px';
    img.style.zIndex = 9999;
    img.setAttribute('draggable', false);
    document.body.appendChild(img);
    var speed = 5;
    var direction = {x: -1, y: -1};
    var chasing = false;
    var chaseTimeout;
    document.addEventListener('mousemove', function(e){
        if(chasing){
            var x = e.clientX;
            var y = e.clientY;
            img.style.right = (window.innerWidth - x - 50) + 'px';
            img.style.bottom = (window.innerHeight - y - 50) + 'px';
        }
    });
    img.addEventListener('click', function(){
        chasing = true;
        clearTimeout(chaseTimeout);
        chaseTimeout = setTimeout(function(){
            chasing = false;
        }, 3000);
    });
    setInterval(function(){
        if(!chasing){
            var x = parseInt(img.style.right);
            var y = parseInt(img.style.bottom);
            if(x > window.innerWidth - 100 || x < 0) direction.x *= -1;
            if(y > window.innerHeight - 100 || y < 0) direction.y *= -1;
            img.style.right = (x + speed * direction.x) + 'px';
            img.style.bottom = (y + speed * direction.y) + 'px';
        }
        img.style.transform = 'rotate(' + (Math.random() * 10 - 5) + 'deg)';
    }, 20);

    // Added code to make the goose randomly stop and change direction
    setInterval(function() {
        if (!chasing) {
            speed = Math.random() < 0.5 ? 0 : 5;
            direction.x = Math.random() < 0.5 ? -1 : 1;
            direction.y = Math.random() < 0.5 ? -1 : 1;
            setTimeout(function() {
                speed = 5;
            }, Math.random() * (5000 - 1000) + 1000);
        }
    }, 1000);
})();
