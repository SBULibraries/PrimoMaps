/* Below are the functions for the right side of the page to expand and collapse
on button click. This works for both the top right button and the "vertical bar"
for mobile devices. */

function toggleIframe1() {
    var iframe1 = document.getElementById("iframeContainer1");
    var iframe2 = document.getElementById("iframeContainer2");

    if (iframe1.style.display === "block") {
        iframe1.style.display = "none";
    } else {
        iframe1.style.display = "block";
        iframe2.style.display = "none";
    }
}
function toggleIframe2() {
    var iframe1 = document.getElementById("iframeContainer1");
    var iframe2 = document.getElementById("iframeContainer2");

    if (iframe2.style.display === "block") {
        iframe2.style.display = "none";
    } else {
        iframe2.style.display = "block";
        iframe1.style.display = "none";
    }
}

function showRightPage() {
    let leftPage = document.getElementById("leftPage");
    let rightPage = document.getElementById("collapsibleRightPage");
    rightPage.style.transition = "";
    rightPage.classList.remove("hidden");
    rightPage.classList.add("shown");
    document.getElementById("showButton").style.display = "none";
    document.getElementById("hideButton").style.display = "block";
}

function hideRightPage() {
    let leftPage = document.getElementById("leftPage");
    let rightPage = document.getElementById("collapsibleRightPage");
    rightPage.style.transition = "";
    rightPage.classList.remove("shown");
    rightPage.classList.add("hidden");
    document.getElementById("showButton").style.display = "block";
    document.getElementById("hideButton").style.display = "none";
}

function toggleRightPage() {
    let leftPage = document.getElementById("leftPage");
    let rightPage = document.getElementById("collapsibleRightPage");
    let verticalBar = document.querySelector(".verticalBar");
    var verticalText = document.querySelector(".verticalText");

    if (rightPage.classList.contains("shown")) {
        rightPage.style.transition = "";
        rightPage.classList.remove("shown");
        rightPage.classList.add("hidden");
        document.getElementById("showButton").style.display = "block";
        document.getElementById("hideButton").style.display = "none";
        verticalBar.classList.remove("active");
        verticalText.classList.remove("active");
    } else {
        rightPage.style.transition = "";
        rightPage.classList.remove("hidden");
        rightPage.classList.add("shown");
        document.getElementById("showButton").style.display = "none";
        document.getElementById("hideButton").style.display = "block";
        verticalBar.classList.add("active");
        verticalText.classList.add("active");
    }
}

/* This defines how the page responds to the size of the window. 
Below 800px, the information on the right side is expanded by a red vertical bar
instead of a button in the top right. */

window.onload = function () {
    const leftPage = document.getElementById("leftPage");
    const collapsibleRightPage = document.getElementById("collapsibleRightPage");
    const rightPage = document.getElementById("collapsibleRightPage");
    const showButton = document.getElementById("showButton");
    const hideButton = document.getElementById("hideButton");
    const bookCoverImage = document.getElementById('bookCoverImage');
    const bookInfo = document.getElementById('bookInfo');
    const bookCover = document.querySelector('.bookCover');

    bookCoverImage.onerror = function() {
        bookCover.classList.add('hidden');
        bookInfo.classList.add('align-left');
    };

    if (rightPage.classList.contains("shown")) {
        showButton.style.display = "none";
        hideButton.style.display = "block";
    } else {
        showButton.style.display = "block";
        hideButton.style.display = "none";
    }
    if (leftPage && collapsibleRightPage) {
        if (window.innerWidth <= 800) {
            hideRightPage();
            leftPage.style.transition = collapsibleRightPage.style.transition = "none";
        } else {
            showRightPage();
            leftPage.style.transition = collapsibleRightPage.style.transition = "none";
        }
    }
    var scale = 1;

    /* This controls the zoom functionality for the map. */

    function toggleZoom(event) {
        scale = (scale === 1) ? 2 : 1;
        applyZoom(event);
    }

    function applyZoom(event) {
        var leftPage = document.getElementById("leftPage");
        var scaleOriginX = event.clientX / leftPage.clientWidth * 100 + "%";
        var scaleOriginY = event.clientY / leftPage.clientHeight * 100 + "%";

        leftPage.style.transformOrigin = scaleOriginX + " " + scaleOriginY;
        leftPage.style.transform = "scale(" + scale + ")";
        leftPage.style.transition = "transform 0.3s ease";
    }

    document.getElementById("leftPage").addEventListener("click", toggleZoom);
};

/* Below is an unused function to display the map as an 
iframe directly from the "Map to Location" button click. */

/*
$(document).ready(function() {
    $(this).click(function(){
      $(".modal-container").hide();
    });
    $("a span:contains('Map to Location')").parent().click(function(event) {
      event.preventDefault(); 
      var modalContainer = $('<div class="modal-container"></div>');
      var iframe = $('<iframe src="' + $(this).attr('href') + '" frameborder="0" loading="eager"></iframe>');
      $(iframe).attr('loading', 'eager')
      modalContainer.append(iframe);
      modalContainer.css({
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
      });
  
      iframe.css({
        width: '100%',
        height: '100%'
      });
  
      $('body').append(modalContainer);
  
      modalContainer.click(function() {
        $(this).remove();
      });
    });
  });
  */