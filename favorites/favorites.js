let db = window.openDatabase("homepageDb", "1.0", "testdb", 2 * 1024 * 1024)

image = "icon-"




function deletefav(id){
    document.getElementById('div-'+id).remove()
}
function readRecordsByIdDelete(id){
    try{
        db.transaction(function(tx){
            tx.executeSql("DELETE FROM favorites where id=?",[id],(tx,result)=>{
                console.log('result' , result.rowsAffected)
                if( result.rowsAffected > 0){
                    deletefav(id)
                }
            })
        })
    }catch(error){
        console.log('error','error')
    }
}

let lista = []
function readRecords(){
    try{    
        db.transaction(function (tx){
            tx.executeSql("SELECT * FROM favorites", [],(tx,result) =>{
                for(let index = 0; index < result.rows.length; index++){
                    let id = result.rows.item(index).id
                    let imageDiv = document.createElement('DIV');
                    imageDiv.id='div-'+ id

                    let image = document.createElement('img')
                    imageDiv.append(image)
                    image.src = `/img/img/${id}.jpg`
                    document.getElementById("container").append(imageDiv)
                    imageDiv.addEventListener("click",function(){
                        let array = id.split("-")
                        console.log(array[1])

                        readRecordsByIdDelete(id)

                    })
                    
                }
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