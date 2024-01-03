import React from "react";


const List = (props) => {
    return( 
        <React.Fragment>
        <ul className="user-list">
        
        {props.data.map((person)=>(
            <li key={person.id}>
            {" "}
            <Person {...person} removeItem={props.removeItem} />
            </li>
        ))}
        
        </ul>
        </React.Fragment>
        
        )
        
    };
    
    const Person = ({id,nome,stato,img,removeItem}) => {
        return (
            
            <article>
            
            
            <img className="person-img" src={img} alt="persona"/>
            
            <div className="person-info">
            <div className="person-action">
            
            <h4>{nome}</h4>
            <button className="btn" onClick={()=>removeItem(id)}>
            {" "}
            x
            
            </button>
            
            </div>

            <p>{stato}</p>
            
            </div>
            
            </article>
            
            );
        };
        
        export default List;