import React from 'react'

export default function Social() {
  return (
    <div>
        <form method='POST'>
            <input type="text" name="github" id="github"  required/>
            <input type="text" name="instagram" id="instagram"  required/>
            <input type="text" name="youtube" id="youtube"  required/>
        </form>
    </div>
  )
}
