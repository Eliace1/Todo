// Sélection des éléments
let i=0;
let d=0;
let c=0;
const taskList = document.getElementById("taskList"); 
const addTaskBtn = document.getElementById("addTaskBtn");  
// Fonction pour ajouter une tâche 
function addTask() {     
    const taskText = prompt("Entrez la description de la tâche :");     
    if (taskText) {         
        const li = document.createElement("li");         
        li.innerHTML="<p>"+taskText+"<p>";         
        addButtons(li);         
        taskList.appendChild(li);     
    } 
}  
// Fonction pour ajouter des boutons Modifier et Supprimer 
function addButtons(task) {  
    const etatBtn = document.createElement("button");     
    etatBtn.textContent = "valider";     
    etatBtn.className = "btn";  
    etatBtn.innerHTML='<img src="img2.png" alt="">';
    etatBtn.addEventListener("click", () => {
        d++;
        c=i-d;
        document.getElementById("valider").textContent="tache validé"+d;
        etatBtn.innerHTML='<img src="img3.png" alt="">';
        document.getElementById("en_cours").textContent="tache en cours"+c;
    });      
    const editBtn = document.createElement("button");     
    editBtn.textContent = "Modifier";     
    editBtn.className = "btn";  
    editBtn.innerHTML='<img src="modifier.png" alt="">';
    editBtn.addEventListener("click", () => {
         newText = prompt("Modifiez la description :"); 
         if (newText) { task.firstChild.textContent = newText; }
    });      
    const deleteBtn = document.createElement("button");    
    deleteBtn.innerHTML = '<img src="suprimer.png" alt="Supprimer">';
   deleteBtn.className = "btn"; 
    deleteBtn.addEventListener("click",() =>{
        supprimer=window.confirm("etes vous sur de vouloir supprimer");
        if(supprimer){
            i--;
        c=i-d;
        task.remove();
        document.getElementById("totale").textContent="tache totale"+i;
        document.getElementById("en_cours").textContent="tache en cours"+c;
        }
    }); 
    task.appendChild(editBtn); task.appendChild(deleteBtn);task.appendChild(etatBtn) } 
    // Écouteur d’événement sur le bouton Ajouter 
    addTaskBtn.addEventListener("click", addTask); 
    // Fonction pour marquer une tâche comme terminée 
    taskList.addEventListener("click", (event) => { 
        if (event.target.tagName === "li") { event.target.classList.toggle("completed"); } }); 
        // Barre de recherche 
    const searchBar = document.getElementById("searchBar"); 
    searchBar.addEventListener("input", (event) => { 
        const filter = event.target.value.toLowerCase(); 
        const tasks = taskList.getElementsByTagName("li"); 
        Array.from(tasks).forEach((task) => { 
            const text = task.firstChild.textContent.toLowerCase(); 
            task.style.display = text.includes(filter) ? "" : "none"; });
         }); 
        function incrementer(){
            i++;
            c=i-d;
            document.getElementById("totale").textContent="tache totale"+i;
            document.getElementById("en_cours").textContent="tache en cours"+c;
            document.body.style.backgroundColor="black";
        }
//fonction native et les fonction creées par nous meme
function incrementer(){

}