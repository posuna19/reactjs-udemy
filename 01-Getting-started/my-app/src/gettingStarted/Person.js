function Person(props){ // React component



	return ( //JSX code, babel compiles to java script
		<div className="person">
  			<h1>{props.name}</h1>
  			<p>Your age: {props.age}</p>
		</div>
	);
}

export default Person
