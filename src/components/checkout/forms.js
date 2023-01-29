import React from 'react'
import { TextField } from '@mui/material'
import { Controller, useFormContext} from 'react-hook-form'

function FormCreate({name, label, required}) {
    const { control } = useFormContext()

    return (
        <>
            <Controller
            as={TextField}
            control={control}
            name={name}
            render = {({ field})=> (
                <TextField
                    label={label}
                    required
                />
            )}
            />
        </>
    )
}

export { FormCreate }