import React from "react";
import Button from "../UI/Button";

const AddExpense=(props)=>{
    return(
        <form>
            <label htmlFor="typeOfExpense">Expense type</label>            
            <select name="typeOfExpense" >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <Button
                name="Add expence type" 
                ButtonStyle="withBackgroundButton" 
                type="button" 
            />
        </form>
    );
}

export default AddExpense;