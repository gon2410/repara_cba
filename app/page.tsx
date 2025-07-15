import Image from "next/image";

export default function Home() {
    return (
		<div className="grid gap-10 md:w-5xl p-3">
			<div className="grid gap-5">
				<p className="text-2xl font-semibold">¿Qué es ReparaCBA?</p>
				<p>Es un proyecto que se está desarrollando con el objetivo de que los ciudadanos
					de Córdoba puedan reportar calles destruidas, baches o problemas de infraestructura
					urbana directamente desde una aplicación web. ReparaCBA nace para que los vecinos de Córdoba
					puedan visibilizar el mal estado de las calles y reclamar mejoras de forma simple, digital y colaborativa.
				</p>
			</div>
			<div className="grid gap-5">
				<p className="text-2xl font-semibold">¿Cómo funciona?</p>
				<ol className="grid gap-5">
					<li className="flex gap-2">1. <Image src={"/copy-writing.png"} width={20} height={10} alt="writing_icon"/>Agregá una descripción.</li>
					<li className="flex gap-2">2. <Image src={"/pin.png"} width={20} height={10} alt="pin_icon"/>Compartí la ubicación.</li>
					<li className="flex gap-2">3. <Image src={"/camera.png"} width={20} height={10} alt="camera_icon"/>Sacá un foto del problema.</li>
					<li className="flex gap-2">4. <Image src={"/check.png"} width={15} height={15} alt="check_icon"/> ¡Listo! Tu reporte se guarda y es visible.</li>
					<li></li>
				</ol>
			</div>
		</div>
    );
}
