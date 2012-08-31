function listPosts(data){
var output='<ul data-role="listview" data-filter="true" data-inset="true" id="listData" >';
output+='<li data-role="list-divider">Trending Events</li>';
data.forEach(function(item,index,ar){
//Add any Jquery Magic to display the Item on Page Dynamically

output+="<li><a href='#'>"+item.sname+"</a></li>";
});
output+="</ul>";
$("#trending").append(output);
$("#listData").listview();
}
