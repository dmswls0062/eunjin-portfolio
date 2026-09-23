import DietVisual from './DietVisual'
import ClothesVisual from './ClothesVisual'
import ShoesVisual from './ShoesVisual'
import ColorVisual from './ColorVisual'
import BlogVisual from './BlogVisual'
import GameVisual from './GameVisual'
import SalaryVisual from './SalaryVisual'

const visualComponents = {
  'diet-visual': DietVisual,
  'clothes-visual': ClothesVisual,
  'shoes-visual': ShoesVisual,
  'color-visual': ColorVisual,
  'blog-visual': BlogVisual,
  'game-visual': GameVisual,
  'salary-visual': SalaryVisual,
}

function ProjectVisual({ project }) {
  const VisualComponent = visualComponents[project.visual] || SalaryVisual

  return <VisualComponent />
}

export default ProjectVisual