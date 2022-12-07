import React from 'react'

const Radio = ({ pergunta, options, id, onChange, active, index }) => {
  if (active === false) return null
  return (
    <>
      <fieldset>
        <legend className='titulo'>{index + 1} - {pergunta}</legend>

        {options.map((opt) =>

          <label key={opt}>
            <input type="radio" id={id} name={id} value={opt} onChange={onChange} />
            {opt}
          </label>

        )}
      </fieldset>
    </>
  )
}

export default Radio