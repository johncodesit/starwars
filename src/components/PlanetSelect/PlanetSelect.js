import React from 'react'
import { FormControl, InputLabel, Select } from '@material-ui/core';
import './PlanetSelect.css'

export default function PlanetSelect(props) { 

    return (
        
        <div>
        <FormControl className="form-control">
            <Select variant="outlined" className="select" onChange={props.onPlanethChange}>
            {props.options.map((planet) => (
                <option key={planet.name} value={planet.name}>{planet.name}</option>
            ))}
            </Select>
        </FormControl>
        </div>
        
    )
}