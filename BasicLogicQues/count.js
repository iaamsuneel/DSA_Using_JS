let tempData = [{ id: 1, name: 'All', isSelected: true }, 
{ id: 2, name: 'dashBoard', isSelected: false }, { id: 3, name: 'Main', isSelected: false },
 { id: 5, name: 'Secondary', isSelected: false }]
tempData.map((ele)=>{
    if(ele.id==2){
        ele.name="main"
    }
})
console.log(tempData);