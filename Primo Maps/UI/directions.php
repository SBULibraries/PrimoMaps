<?php 
#Bring in the "image" to this document so that we can change what is displayed based on the library code.
$image=$_GET["image"];

#Allows us to print directions based on library code. Make any content changes for the pop up window in these statements.
if ($image === "mus-.png" || $image === "muscirc.png") {
    $directions = "<p class = 'p1'>The <b>Music Library</b> is located on the <b>1st floor</b> of the
    Melville Library. You can find this room at the end of the long hallway
    to the left of the North Reading Room entrance. The North Reading Room is at the opposite end of the building from the 
    Student Activities Center, or to your right if you enter from the entrance by the Staller Steps. 
    If you need assistance navigating our libraries, contact any of our Circulation staff at our service desks 
    or call us at (631) 632-7115.</p>";
    } elseif ($image === "mainp.png" || $image === "mainae.png" ||
                $image === "mainhj.png" || $image === "mainfz.png" || $image === "maincirc.png") {
    $directions = "<p class = 'p1'>The <b>Main Stacks</b> are located on the <b>3rd floor</b> of the
    Melville Library. You can find this library by walking up the stairs that are
    located in the Main Hallway and turning right, or using the elevators at the 
    North or South ends of the Building to the 3rd floor and following our signage. 
    Once you are inside the Main Stacks, our 2nd and 4th floors are accessible 
    via the stairwells towards the left as you walk in. If you need assistance navigating 
    our libraries, contact any of our Circulation staff at our service desks or call 
    us at (631) 632-7115.</p>";
    } elseif ($image === "nrr.png" || $image === "nrrcirc.png") {
    $directions = "<p class = 'p1'>The <b>North Reading Room</b> stacks are located on the <b>2nd floor</b> of the 
    North Reading Room. Once you reach the top of the spiral stair case, the stacks are through the large gray double doors
    that you can see on your right. 
    <br></br>
    The North Reading Room is located on the <b>1st floor</b> of the
    Melville Library. You can find this library by walking down the main hallway towards the glass doors.
    This is at the opposite end of the building from the Student Activities Center, or to your right if you
    enter from the entrance by the Staller Steps. If you need assistance navigating 
    our libraries, contact any of our Circulation staff at our service desks or call 
    us at (631) 632-7115.</p>";
    }
    else {
    $directions = "Oops! It doesn't appear we have any directions for this location!
    If you need assistance navigating our libraries, contact any of our Circulation 
    staff at our service desks or call us at (631) 632-7115.";    
    }
?>

<!-- Begin HTML !-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="javascript.js"></script>
</head>
<body>

<div id="direction-info" class="library-container color-bars-border box-type-4 box-position-1">
    <div class="box-html">
        <div class="box-title color-bars color-bars-border"></div>
        <div class="box-content clearfix">
            <p class="p2"><u>Directions:</u></p>
            <!-- Close button at the top -->
            <button class="close-button" onclick="toggleIframe2()">X</button>
            <!-- Main content with directions, as defined at the top of this document -->
            <p class="p1"><?php echo($directions); ?></p>
            <!-- Close button at the bottom -->
            <button class="guideButton" onclick="toggleIframe2()">Close Window</button>
        </div>
    </div>
</div>
</body>
</html>