import test from 'ava'
import Edge from '../src/Edge.js'
import Point from '../src/Point.js'
import { edgeIntersect, pointEdgeDistance, intersectPoint } from '../src/utils.js'

test('edgeIntersect test', t => {
  const p1 = new Point([0, 0], -1)
  const p2 = new Point([0, 1], -1)
  const p3 = new Point([0, 2], -1)
  const p4 = new Point([2, 2], -1)

  const e1 = new Edge(p1, p2)

  t.is(edgeIntersect(p1, p2, e1), true)
  t.is(edgeIntersect(p2, p1, e1), true)
  t.is(edgeIntersect(p3, p4, e1), false)
})

test('pointEdgeDistance test', t => {
  const p1 = new Point([3, 1], -1)
  const p2 = new Point([3, 5], -1)
  const p3 = new Point([2, 2], -1)
  const p4 = new Point([4, 4], -1)
  const p5 = new Point([1, 1], -1)
  const p6 = new Point([1, 2], -1)
  const p7 = new Point([3, 4], -1)
  const p8 = new Point([2, 5], -1)

  const e1 = new Edge(p1, p2)
  const e2 = new Edge(p3, p4)
  const e3 = new Edge(p5, p2)
  const i = intersectPoint(p3, p4, e1)
  const ip = new Point([3, 3], -1)
  t.is(i.x, ip.x)
  t.is(i.y, ip.y)

  const i2 = intersectPoint(p3, p4, e1)
  const ip2 = new Point([3, 3], -1)
  t.is(i2.x, ip2.x)
  t.is(i2.y, ip2.y)

  t.is(pointEdgeDistance(p3, p4, e1), 1.4142135623730951)
  t.is(pointEdgeDistance(p1, p2, e2), 2)
  t.is(pointEdgeDistance(p6, p7, e3), 1.4142135623730951)
  t.is(pointEdgeDistance(p8, p7, e3), 0.9428090415820635)

})
