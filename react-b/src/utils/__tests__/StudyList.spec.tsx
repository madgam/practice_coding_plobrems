import renderer from 'react-test-renderer'
import StudyList from 'src/components/StudyList'

function MainComponent() {
  const testStudyList = [
    { name: '国語', time: 45 },
    { name: '数学', time: 60 },
  ]
  return <StudyList items={testStudyList} />
}

test('FormLabel', () => {
  const testRenderer = renderer.create(<MainComponent />)
  const testInstance = testRenderer.root

  expect(testInstance.findByType(StudyList).props.items).toStrictEqual([
    { name: '国語', time: 45 },
    { name: '数学', time: 60 },
  ])
})
