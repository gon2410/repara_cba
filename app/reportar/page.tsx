"use client";

import { useCallback } from 'react';
import Dropzone from 'react-dropzone';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { ImagePlus } from 'lucide-react';
import Image from 'next/image';

const ReportarPage = () => {
    const [type, setType] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [number, setNumber] = useState<string>();
    const [files, setFiles] = useState<File[]>([]);

    const submit = () => {
        console.log(type, description, street, number);
        console.log(files);
    };

    return (
        <form action={submit} className='grid gap-5 md:w-md p-5'>
            <div className='grid gap-1'>
                <Label htmlFor="name">Tipo de problema</Label>
                <Select value={type} onValueChange={(value) => setType(value)} required>
                    <SelectTrigger id="name">
                        <SelectValue placeholder="Elegir" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="street">Calle</SelectItem>
                        <SelectItem value="sidewalk">Vereda</SelectItem>
                        <SelectItem value="both">Ambos</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='grid gap-1'>
                <Label htmlFor="description">Necesitamos una descripción del problema</Label>
                <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
            </div>
            <div className='grid gap-1'>
                <Label htmlFor="street">Calle en la que se encuentra el problema</Label>
                <Input id="street" value={street} onChange={(e) => setStreet(e.target.value)} required/>
            </div>
            <div className='grid gap-1'>
                <Label htmlFor="number">Altura</Label>
                <Input id="number" defaultValue={number} onChange={(e) => setNumber(e.target.value)} type="number"/>
            </div>
            <div id="images" className="grid gap-10 w-full border rounded-2xl p-5">
                <Dropzone onDrop={acceptedFiles => setFiles((prev) => [...prev, ...acceptedFiles])}>
                    {({getRootProps, getInputProps}) => (
                        <div className="flex justify-center" {...getRootProps()}>
                            <Input {...getInputProps()} />
                            <div className='flex gap-3'>
                                <ImagePlus />
                                <p>Agregá fotos</p>
                            </div>
                        </div>
                    )}
                </Dropzone>
                {files ?
                    <div className="flex gap-4">
                        {files.map((file, index) => (
                            <Image
                                key={index}
                                src={URL.createObjectURL(file)}
                                alt={`preview`}
                                width={50}
                                height={50}
                                className="rounded"
                            />
                        ))}
                    </div>
                :
                    <></>}
            
            </div>
                <div className="grid mt-5 mx-auto">
                <Button type="submit">Reportar</Button>
            </div>
        </form>
    )
}

export default ReportarPage;