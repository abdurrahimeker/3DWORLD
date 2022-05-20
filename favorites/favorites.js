let db = window.openDatabase("homepageDb", "1.0", "testdb", 2 * 1024 * 1024)

let lista = []
function readRecords(){
    try{    
        db.transaction(function (tx){
            tx.executeSql("SELECT * FROM favorites", [],(tx,result) =>{
                let imageDiv = document.createElement('DIV');
                for(let index = 0; index < result.rows.length; index++){
                    let image = document.createElement('img')
                    let type = 'jpg'
                    image.src = `/img/img/${result.rows.item(index).id}.${type}`
                    imageDiv.append(image)
                }
                
                document.getElementById("container").append(imageDiv)
            })
        })
    }catch(error){
        console.log('error' , error)
    }
}
readRecords()


    
// function readRecordsById(id){
//     console.log("vdfvf")
//     try{    
//         db.transaction(function (tx){
//             tx.executeSql("SELECT * FROM favorites where id=?", [id],(tx,result) =>{
//                 for(let index = 0; index < result.rows.length; index++){
//                     console.log('item by id' ,result.rows.item(index))

//                 }
//             })
//         })
//     }catch(error){
//         console.log('error' , error)
//     }
// }

// readRecordsById();