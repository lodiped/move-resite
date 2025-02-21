<script>
	import { T } from '@threlte/core';
	import { Float, Environment, interactivity, OrbitControls, useGltf } from '@threlte/extras';

	interactivity();

	const gltf = useGltf('/lib/assets/Foguete.glb');
	let nodes = $derived($gltf?.nodes);
	let materials = $derived($gltf?.materials);
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 5, 10]}
	oncreate={(ref) => {
		ref.lookAt(0, 1, 0);
	}}
>
	<OrbitControls enableZoom={false} />
</T.PerspectiveCamera>

<T.DirectionalLight position={[20, 20, -10]} color="bisque" intensity={10} />
<T.DirectionalLight position={[-15, 0, 0]} color="cyan" />

<Environment url={'/lib/assets/enviro.jpg'} />

<!-- {#await useGltf('/lib/assets/Foguete.glb') then foguete}
	<Float floatIntensity={2} speed={5} floatingRange={[0, 1]}>
		<T is={foguete.scene} position={[0, 0, 0]} scale={1} rotation.y={rotation} />
	</Float>
{/await} -->
{#if $gltf && nodes}
	<Float speed={2} floatIntensity={2} floatingRange={[0, 2]}>
		<T is={nodes['Cylinder']} />
	</Float>
{/if}
