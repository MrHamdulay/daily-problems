class Node:
  def __init__(self, value):
    self.value = value
    self.parent = None
    self.children = []

  def addChild(self, child):
    self.children.append(child)

  def __repr__(self):
    return '<value: %s  children: (%s)>' % (self.value, len(self.children))

  def pp(self):
    print self.value
    print '| \\'
    if self.right:
      print '|  ',self.right.value
    if self.left:
      self.left.pp()

  @property
  def right(self):
    return self.children[1] if len(self.children) >= 2 else None

  @property
  def left(self):
    return self.children[0] if len(self.children) >= 1 else None

input = '''
1 2
1 3
2 4
2 5
4 6
4 7'''

root = Node(1);
nodes = {}
nodes['1'] = root

for line in input.split('\n'):
  if line:
    parent, value = line.split()
    if value in nodes:
      node = nodes[value]
    else:
      node = Node(value)
      nodes[value] = node

    node.parent = nodes[parent]
    nodes[parent].addChild(node)
root.pp()

def canTraverse(node):
  return node and node.right and len(node.right.children) == 0 and node.left

cur = root
while canTraverse(cur):
  cur = cur.left

print
newRoot = Node(cur.value)
newCur = newRoot
while cur.parent is not None:
  newCur.right = Node(cur.parent.right.value)
  newCur.left = Node(cur.parent.value)
  newCur = newCur.left
  cur = cur.parent

newRoot.pp()
