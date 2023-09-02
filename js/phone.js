const loadPhone = async (searchText) => {
      const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
      const data = await res.json();
      const phones = data.data
      // console.log(phones);
      displayPhone(phones)
}
const displayPhone = phones => {
      // console.log(phones) 
      // 1.get elementById set  
      const phoneContainer = document.getElementById('phone-container')

      // clear the data 
      phoneContainer.textContent ='';

      // display show all button
      const showAllContainer = document.getElementById('show-All-container');
      if (phones.length > 13){
            showAllContainer.classList.remove('hidden')
      }
      else{
            showAllContainer.classList.add('hidden')
      }


      // display phone 13 phones
      phones = phones.slice(0,13);

      phones.forEach(phone => {
            // console.log(phone)
            // 2.Create a div
            const phoneCard = document.createElement('div');
            phoneCard.classList = `card card-compact p-4 bg-gray-100 shadow-xl`;
            // 3.innerHtml sections
            phoneCard.innerHTML = `
            <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
            
            `;
            // 4.append child
            phoneContainer.appendChild(phoneCard)
      });
      // hidden the spinner
      toggleLoadingSpinner(false)
}


// handle search button
const handleSearch = () =>{
      const searchField = document.getElementById('search-field')
      const searchText = searchField.value
      console.log(searchText)
      loadPhone(searchText)
}


const handleSearch2 = () =>{
      toggleLoadingSpinner(true)
      const searchField =document.getElementById('search-field2')
      const searchText = searchField.value
      loadPhone(searchText)
}

const toggleLoadingSpinner = (isLoading) =>{
      const toggleLoad = document.getElementById('loading-spinner')
      if(isLoading){
            toggleLoad.classList.remove('hidden')
      }
      else{
            toggleLoad.classList.add('hidden')
      }

     
}


// loadPhone();