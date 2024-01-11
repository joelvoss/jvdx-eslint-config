function Comp() {
  return (
    <div>
      <img src="foo" />
      <img {...props} />
      <img {...props} alt /> {/* Has no value*/}
      <img {...props} alt={undefined} /> {/* Has no value*/}
      <img {...props} alt={`${undefined}`} /> {/* Has no value*/}
      <img src="foo" role="presentation" /> {/* Avoid ARIA if it can be achieved without*/}

      <img src="foo" role="none" /> {/* Avoid ARIA if it can be achieved without */} 

      <object {...props} />


      <area {...props} />

      <input type="image" {...props} />
    </div>
  )
}