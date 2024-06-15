import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function ContentComponent(){
    return(
        <>
        <div class="container mt-3">
        <div class="row p-3">
            <div class="col">
                <h1>Header Footer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id fugit harum ipsa impedit beatae libero nam pariatur, exercitationem alias sequi et cumque, sint corrupti dolorem commodi molestiae, non facere?</p>
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5h_t0-SvcPGt0kP_fnILFjy-UEkLc2EipIko3H3Ko1bZOyGw6" alt="" />
            </div>
            <div class="col">
                <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg" alt=""  height={400} />
            </div>
        </div>
    </div>
        </>
    )
}
export default ContentComponent