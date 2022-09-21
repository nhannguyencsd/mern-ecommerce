import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
    const { id } = useParams();
    console.log(id);
    return 'Product details page';
}

export default ProductDetailsPage;
