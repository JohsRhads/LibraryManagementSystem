// Render the Category page into #main-content
const renderCategoryPage = () => {
    const mainContent = document.getElementById("main-content");

    mainContent.innerHTML = `
        <div class="category-page">
            <h1>Category</h1>
            <p>Welcome to the Category page.</p>

            <div class="AddCategoryForm">
                <h2>Add Category</h2>
                
                <div class="form-area">
                    <input type="text" placeholder="Category Name" />
                    <button type="submit">Add Category</button>
                </div>
            </div>


            <div class="CategoryTable" id="category-table">
                <!-- Placeholder for the category table -->
            </div>
        </div>


    `;
};

const generateCategoryTable = () => {

}

export { renderCategoryPage };