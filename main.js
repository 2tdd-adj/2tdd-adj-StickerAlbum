document.addEventListener('DOMContentLoaded', function() {
    const stickersContainer = document.querySelector('.stickers');
    const overlay = document.querySelector('.overlay');
    const clickSound = document.getElementById('clickSound');
    const body = document.querySelector('body');
    body.addEventListener('touchmove', function(e) {
        if (overlay.style.display === 'block') {
            e.preventDefault();
        }
    }, {
        passive: false
    });
    const stickersData = [{
        imageUrl: 'album/1/ss.png',
        counter: 'complete.png',
        headerImage: 'album/1/head.jpg',
        backgroundColor: '#c495ef',
        images: ['album/1/melodylane.png', 'album/1/2.png', 'album/1/3.png', 'album/1/4.png', 'album/1/5.png', 'album/1/6.png', 'album/1/7.png', 'album/1/8.png', 'album/1/9.png']
    }, {
        imageUrl: 'album/2/mm.png',
        counter: 'complete.png',
        headerImage: 'album/2/head.jpg',
        backgroundColor: '#b6eae6',
        images: ['album/2/1.png', 'album/2/2.png', 'album/2/3.png', 'album/2/4.png', 'album/2/5.png', 'album/2/6.png', 'album/2/7.png', 'album/2/8.png', 'album/2/9.png']
    }, {
        imageUrl: 'album/3/sn.png',
        counter: 'complete.png',
        headerImage: 'album/3/head.jpg',
        backgroundColor: '#8ddfed',
        images: ['album/3/1.png', 'album/3/2.png', 'album/3/3.png', 'album/3/4.png', 'album/3/5.png', 'album/3/6.png', 'album/3/7.png', 'album/3/8.png', 'album/3/9.png']
    }, {
        imageUrl: 'album/4/lvm.png',
        counter: 'complete.png',
        headerImage: 'album/4/head.jpg',
        backgroundColor: '#f3a670',
        images: ['album/4/1.png', 'album/4/2.png', 'album/4/3.png', 'album/4/4.png', 'album/4/5.png', 'album/4/6.png', 'album/4/7.png', 'album/4/8.png', 'album/4/9.png']
    }, {
        imageUrl: 'album/5/mb.png',
        counter: 'complete.png',
        headerImage: 'album/5/head.jpg',
        backgroundColor: '#f49fae',
        images: ['album/5/1.png', 'album/5/2.png', 'album/5/3.png', 'album/5/4.png', 'album/5/5.png', 'album/5/6.png', 'album/5/7.png', 'album/5/8.png', 'album/5/9.png']
    }, {
        imageUrl: 'album/6/wm.png',
        counter: 'complete.png',
        headerImage: 'album/6/head.jpg',
        backgroundColor: '#d7a676',
        images: ['album/6/1.png', 'album/6/2.png', 'album/6/3.png', 'album/6/4.png', 'album/6/5.png', 'album/6/6.png', 'album/6/7.png', 'album/6/8.png', 'album/6/9.png']
    }, {
        imageUrl: 'album/7/bb.png',
        counter: 'complete.png',
        headerImage: 'album/7/head.jpg',
        backgroundColor: '#f2d04e',
        images: ['album/7/1.png', 'album/7/2.png', 'album/7/3.png', 'album/7/4.png', 'album/7/5.png', 'album/7/6.png', 'album/7/7.png', 'album/7/8.png', 'album/7/9.png']
    }, {
        imageUrl: 'album/8/ca.png',
        counter: 'complete.png',
        headerImage: 'album/8/head.jpg',
        backgroundColor: '#72bada',
        images: ['album/8/1.png', 'album/8/2.png', 'album/8/3.png', 'album/8/4.png', 'album/8/5.png', 'album/8/6.png', 'album/8/7.png', 'album/8/8.png', 'album/8/9.png']
    }, {
        imageUrl: 'album/9/logo.png',
        counter: 'complete.png',
        headerImage: 'album/9/head.jpg',
        backgroundColor: '#b3f799',
        images: ['album/9/1.png', 'album/9/2.png', 'album/9/3.png', 'album/9/4.png', 'album/9/5.png', 'album/9/6.png', 'album/9/7.png', 'album/9/8.png', 'album/9/9.png']
    }, {
        imageUrl: 'album/10/logo.png',
        counter: 'complete.png',
        headerImage: 'album/10/head.jpg',
        backgroundColor: '#fbacdc',
        images: ['album/10/1.png', 'album/10/2.png', 'album/10/3.png', 'album/10/4.png', 'album/10/5.png', 'album/10/6.png', 'album/10/7.png', 'album/10/8.png', 'album/10/9.png']
    }, {
        imageUrl: 'album/11/logo.png',
        counter: 'complete.png',
        headerImage: 'album/11/head.jpg',
        backgroundColor: '#e8c7e9',
        images: ['album/11/1.png', 'album/11/2.png', 'album/11/3.png', 'album/11/4.png', 'album/11/5.png', 'album/11/6.png', 'album/11/7.png', 'album/11/8.png', 'album/11/9.png']
    }, {
        imageUrl: 'album/12/logo.png',
        counter: 'complete.png',
        headerImage: 'album/12/head.jpg',
        backgroundColor: '#b1acdb',
        images: ['album/12/1.png', 'album/12/2.png', 'album/12/3.png', 'album/12/4.png', 'album/12/5.png', 'album/12/6.png', 'album/12/7.png', 'album/12/8.png', 'album/12/9.png']
    }, {
        imageUrl: 'album/13/logo.png',
        counter: 'complete.png',
        headerImage: 'album/13/head.jpg',
        backgroundColor: '#9ee378',
        images: ['album/13/1.png', 'album/13/2.png', 'album/13/3.png', 'album/13/4.png', 'album/13/5.png', 'album/13/6.png', 'album/13/7.png', 'album/13/8.png', 'album/13/9.png']
    }, {
        imageUrl: 'album/14/logo.png',
        counter: 'complete.png',
        headerImage: 'album/14/head.jpg',
        backgroundColor: '#faa78e',
        images: ['album/14/1.png', 'album/14/2.png', 'album/14/3.png', 'album/14/4.png', 'album/14/5.png', 'album/14/6.png', 'album/14/7.png', 'album/14/8.png', 'album/14/9.png']
    }, {
        imageUrl: 'album/15/logo.png',
        counter: 'complete.png',
        headerImage: 'album/15/head.jpg',
        backgroundColor: '#a2e6d4',
        images: ['album/15/1.png', 'album/15/2.png', 'album/15/3.png', 'album/15/4.png', 'album/15/5.png', 'album/15/6.png', 'album/15/7.png', 'album/15/8.png', 'album/15/9.png']
    }, {
        imageUrl: 'album/16/logo.png',
        counter: 'complete.png',
        headerImage: 'album/16/head.jpg',
        backgroundColor: '#f7d595',
        images: ['album/16/1.png', 'album/16/2.png', 'album/16/3.png', 'album/16/4.png', 'album/16/5.png', 'album/16/6.png', 'album/16/7.png', 'album/16/8.png', 'album/16/9.png']
    }, {
        imageUrl: 'album/17/logo.png',
        counter: 'complete.png',
        headerImage: 'album/17/head.jpg',
        backgroundColor: '#60e4e5',
        images: ['album/17/1.png', 'album/17/2.png', 'album/17/3.png', 'album/17/4.png', 'album/17/5.png', 'album/17/6.png', 'album/17/7.png', 'album/17/8.png', 'album/17/9.png']
    }, {
        imageUrl: 'album/18/logo.png',
        counter: 'complete.png',
        headerImage: 'album/18/head.jpg',
        backgroundColor: '#d97a6e',
        images: ['album/18/1.png', 'album/18/2.png', 'album/18/3.png', 'album/18/4.png', 'album/18/5.png', 'album/18/6.png', 'album/18/7.png', 'album/18/8.png', 'album/18/9.png']
    }, {
        imageUrl: 'album/19/logo.png',
        counter: 'complete.png',
        headerImage: 'album/19/head.jpg',
        backgroundColor: '#fab05b',
        images: ['album/19/1.png', 'album/19/2.png', 'album/19/3.png', 'album/19/4.png', 'album/19/5.png', 'album/19/6.png', 'album/19/7.png', 'album/19/8.png', 'album/19/9.png']
    }, {
        imageUrl: 'album/20/logo.png',
        counter: 'complete.png',
        headerImage: 'album/20/head.jpg',
        backgroundColor: '#f4da8d',
        images: ['album/20/1.png', 'album/20/2.png', 'album/20/3.png', 'album/20/4.png', 'album/20/5.png', 'album/20/6.png', 'album/20/7.png', 'album/20/8.png', 'album/20/9.png']
    }, {
        imageUrl: 'album/21/logo.png',
        counter: 'complete.png',
        headerImage: 'album/21/head.jpg',
        backgroundColor: '#fabb59',
        images: ['album/21/1.png', 'album/21/2.png', 'album/21/3.png', 'album/21/4.png', 'album/21/5.png', 'album/21/6.png', 'album/21/7.png', 'album/21/8.png', 'album/21/9.png']
    }, {
        imageUrl: 'album/22/logo.png',
        counter: 'complete.png',
        headerImage: 'album/22/head.jpg',
        backgroundColor: '#bbb5ec',
        images: ['album/22/1.png', 'album/22/2.png', 'album/22/3.png', 'album/22/4.png', 'album/22/5.png', 'album/22/6.png', 'album/22/7.png', 'album/22/8.png', 'album/22/9.png']
    }, {
        imageUrl: 'album/23/logo.png',
        counter: 'complete.png',
        headerImage: 'album/23/head.jpg',
        backgroundColor: '#f6b2b2',
        images: ['album/23/1.png', 'album/23/2.png', 'album/23/3.png', 'album/23/4.png', 'album/23/5.png', 'album/23/6.png', 'album/23/7.png', 'album/23/8.png', 'album/23/9.png']
    }, ];
    let selectedStickerImage = '';
    function createSticker(stickerData) {
        const stickerDiv = document.createElement('div');
        stickerDiv.classList.add('sticker');
        stickerDiv.innerHTML = `
        <div class="sticker-image" style="background-image: url('${stickerData.imageUrl}');"></div>
        <div class="sticker-counter"><img src="${stickerData.counter}" alt="Completion Icon"></div>
    `;
        stickerDiv.addEventListener('click', function() {
            overlay.innerHTML = '';
            clickSound.play();
            const popupDiv = document.createElement('div');
            popupDiv.classList.add('popup');
            popupDiv.classList.add('popup-first');
            const popupHeader = document.createElement('div');
            popupHeader.classList.add('popup-header');
            const headerImage = document.createElement('img');
            headerImage.src = stickerData.headerImage;
            headerImage.alt = 'Popup Header Image';
            popupHeader.appendChild(headerImage);
            popupDiv.appendChild(popupHeader);
            const popupContent = document.createElement('div');
            popupContent.classList.add('popup-content');
            const popupImages = document.createElement('div');
            popupImages.classList.add('popup-images');
            stickerData.images.forEach(imageUrl=>{
                const image = document.createElement('img');
                image.src = imageUrl;
                image.classList.add('popup-image');
                image.alt = 'Image';
                image.style.backgroundColor = stickerData.backgroundColor;
                image.addEventListener('click', function() {
                    selectedStickerImage = imageUrl;
                    clickSound.play();
                    const selectedImage = image.cloneNode(true);
                    const selectedPopup = document.createElement('div');
                    selectedPopup.classList.add('popup2');
                    selectedPopup.innerHTML = `
        <div class="popup-content">
            <div class="popup-images popunique">
                ${selectedImage.outerHTML} <!-- Display the selected image -->
            </div>
            <button class="popup-button">Collect Me</button>
        </div>
    `;
                    document.body.appendChild(selectedPopup);
                    const popupImage = selectedPopup.querySelector('.popup-images img');
                    popupImage.classList.add('congrats-effect');
                    const congratsSoundPath = 'success.mp3';
                    const congratsSound = new Audio(congratsSoundPath);
                    function playCongratsSound() {
                        congratsSound.play();
                    }
                    const button = selectedPopup.querySelector('.popup-button');
                    button.addEventListener('click', function() {
                        playCongratsSound();
                        selectedPopup.remove();
                        const usernameInput = document.createElement('input');
                        usernameInput.setAttribute('type', 'text');
                        usernameInput.setAttribute('placeholder', 'Enter your Monopoly username');
                        usernameInput.classList.add('username-input');
                        const submitButton = document.createElement('button');
                        submitButton.textContent = 'Submit';
                        submitButton.classList.add('submit-button');
                        const popupContent = document.createElement('div');
                        popupContent.classList.add('custom-popup-content');
                        popupContent.appendChild(usernameInput);
                        popupContent.appendChild(submitButton);
                        const newPopup = document.createElement('div');
                        newPopup.classList.add('popup2');
                        newPopup.appendChild(popupContent);
                        document.body.appendChild(newPopup);
                        popupContent.style.opacity = '0';
                        popupContent.style.transition = 'opacity 0.5s ease-in-out';
                        setTimeout(()=>{
                            popupContent.style.opacity = '1';
                        }
                        , 100);
                        function showLoadingSpinner() {
                            const loadingSpinner = document.createElement('div');
                            loadingSpinner.classList.add('circle-spinner');
                            popupContent.appendChild(loadingSpinner);
                        }
                        submitButton.addEventListener('click', function() {
                            const username = usernameInput.value.trim();
                            const selectedSticker = '';
                            if (username !== '') {
                                usernameInput.style.display = 'none';
                                submitButton.style.display = 'none';
                                showLoadingSpinner();
                                showVerification(`Initiating sign-up process for user: ${username}...`);
                                setTimeout(()=>{
                                    showVerification('Verifying user credentials...');
                                    setTimeout(()=>{
                                        showVerification('User credentials verified successfully');
                                        setTimeout(()=>{
                                            showVerification('Initiating security checks...');
                                            setTimeout(()=>{
                                                showVerification('Security checks completed');
                                                setTimeout(()=>{
                                                    showVerification('Finalizing registration process...');
                                                    setTimeout(()=>{
                                                        showVerification('Registration completed successfully');
                                                        const finalMessage = document.createElement('p');
                                                        finalMessage.textContent = `Congratulations, ${username}! Your registration is complete.`;
                                                        const stickerOptionMessage = document.createElement('p');
                                                        stickerOptionMessage.textContent = 'You have selected the following sticker option:';
                                                        const selectedStickerImg = document.createElement('img');
                                                        selectedStickerImg.src = selectedStickerImage;
                                                        selectedStickerImg.alt = 'Selected Sticker';
                                                        const additionalSentence = document.createElement('p');
                                                        additionalSentence.textContent = 'Click here to verify and claim your prize.';
                                                        const loadLockerButton = document.createElement('button');
                                                        loadLockerButton.textContent = 'Verify';
                                                        loadLockerButton.classList.add('load-locker-button');
                                                        const loadingSpinner = document.querySelector('.circle-spinner');
                                                        loadingSpinner.style.display = 'none';
                                                        const customPopupContent = document.querySelector('.custom-popup-content');
                                                        customPopupContent.appendChild(finalMessage);
                                                        customPopupContent.appendChild(stickerOptionMessage);
                                                        customPopupContent.appendChild(selectedStickerImg);
                                                        customPopupContent.appendChild(additionalSentence);
                                                        customPopupContent.appendChild(loadLockerButton);
                                                        loadLockerButton.addEventListener('click', function() {
                                                            loadContentLocker();
                                                        });
                                                    }
                                                    , 2000);
                                                }
                                                , 2000);
                                            }
                                            , 2000);
                                        }
                                        , 2000);
                                    }
                                    , 2000);
                                }
                                , 2000);
                            } else {
                                showToast('Please enter a valid username');
                            }
                        });
                        function showToast(message) {
                            var toast = document.getElementById("toast");
                            toast.textContent = message;
                            toast.className = "toast show";
                            setTimeout(function() {
                                toast.className = toast.className.replace("show", "");
                            }, 3000);
                        }
                        function showVerification(message) {
                            const verificationMessage = document.createElement('p');
                            verificationMessage.textContent = message;
                            verificationMessage.classList.add('verification-message');
                            popupContent.appendChild(verificationMessage);
                            setTimeout(()=>{
                                verificationMessage.style.opacity = '1';
                            }
                            , 10000);
                            setTimeout(()=>{
                                verificationMessage.style.opacity = '0';
                                setTimeout(()=>{
                                    verificationMessage.remove();
                                }
                                , 1500);
                            }
                            , 3000);
                        }
                        function showContentLocker() {
                            popupContent.innerHTML = '';
                            const loadLockerButton = document.createElement('button');
                            loadLockerButton.textContent = 'Load Locker';
                            loadLockerButton.classList.add('load-locker-button');
                            popupContent.appendChild(loadLockerButton);
                            loadLockerButton.addEventListener('click', function() {
                                loadContentLocker();
                            });
                        }
                        function loadContentLocker() {
                            _yk();
                        }
                    });
                });
                popupImages.appendChild(image);
            }
            );
            popupContent.appendChild(popupImages);
            popupDiv.appendChild(popupContent);
            const closeButton = document.createElement('div');
            closeButton.classList.add('close-button');
            closeButton.textContent = 'X';
            closeButton.addEventListener('click', function() {
                overlay.style.display = 'none';
            });
            popupDiv.appendChild(closeButton);
            overlay.appendChild(popupDiv);
            overlay.style.display = 'block';
            setTimeout(()=>{
                popupDiv.classList.add('popup-animation');
            }
            , 1000);
        });
        return stickerDiv;
    }
    stickersData.forEach(stickerData=>{
        const stickerElement = createSticker(stickerData);
        stickersContainer.appendChild(stickerElement);
    }
    );
    function updateTimeLeft() {
        const currentDate = new Date();
        const targetDate = new Date('2024-09-27');
        const timeDifference = targetDate - currentDate;
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        const timeLeftElement = document.querySelector('.timeleft');
        timeLeftElement.textContent = `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        setTimeout(updateTimeLeft, 1000);
    }
    updateTimeLeft();
});
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

    
    
