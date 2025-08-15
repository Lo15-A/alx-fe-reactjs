import { Link } from 'react-router-dom';

// Inside your map function:
<Link to={`/recipe/${recipe.id}`} key={recipe.id}>
  {/* Your card content */}
</Link>
