var quotes = ["'Associate yourself with men of good quality if you esteem your own reputation; for tis better to be alone than in bad company.'", "'You will ever remember that all the end of study is to make you a good man and a useful citizen.'", "'When angry, count ten, before you speak; if very angry, a hundred.'" , "'The advancement and diffusion of knowledge is the only guardian of true liberty.'" , "'It is by a thorough knowledge of the whole subject that [people] are enabled to judge correctly of the past and to give a proper direction to the future.'" , "'If your actions inspire others to dream more, learn more, do more and become more, you are a leader.'", "'Take time to deliberate; but when the time for action arrives, stop thinking and go in.'", "'All the lessons of history and experience must be lost upon us if we are content to trust alone to the peculiar advantages we happen to possess.'" , "'I contend that the strongest of all governments is that which is most free.'", "'Wealth can only be accumulated by the earnings of industry and the savings of frugality.'", "'May the boldest fear and the wisest tremble when incurring responsibilities on which may depend our country's peace and prosperity, and in some degree the hopes and happiness of the whole human family.'", "'It would be judicious to act with magnanimity towards a prostrate foe.'" ,"'An honorable defeat is better than a dishonorable victory.'", "'The storm of frenzy and faction must inevitably dash itself in vain against the unshaken rock of the Constitution.'", "'A long visit to a friend is often a great bore. Never make people twice glad.'"  ];
var presidentName = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison" , "John Tyler", "James Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan"];
var yearsOfPresidency =["1789-1797", "1797-1801", "1801-1809", "1809-1817", "1817-1825", "1825-1829", "1829-1837", "1837-1841", "1841", "1841-1845", "1845-1849", "1849-1850", "1850-1853", "1853-1857", "1857-1861" ]; 

$(document).ready(function(){
  var randomNumber = Math.floor(Math.random() * 16);
  $(".quotation").html(quotes[randomNumber]);
  $(".name-of-president").html(presidentName[randomNumber]);
  $(".date-of-presidency").html(yearsOfPresidency[randomNumber]);
});

$("#new-quote" ).click(function() {
  var clickedRandomNumber = Math.floor(Math.random() * 16);
  $(".quotation").html(quotes[clickedRandomNumber]);
  $(".name-of-president").html(presidentName[clickedRandomNumber]);
  $(".date-of-presidency").html(yearsOfPresidency[clickedRandomNumber]);
});


 