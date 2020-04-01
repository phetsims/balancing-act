/* eslint-disable */
const mipmaps = [
  {
    "width": 257,
    "height": 167,
    "url": "data:image/png;base64,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XqVnn0oQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEHwqQ/+gtveU3cm9+1e8pWvj3jJ9W8SBEEQBEEQBEFw3Vtv9shjDV/es+xMbttV98WP3a071xYEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRBUEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISvvLQ/RYOPeDGnTVncsedXW/4yfdKSEhISEhISEhISEhI6G82XffWm3zoI8edyTU7ql64reOLH/uwhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIqEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhMR/+eAvuOUdq53JfbuXPPJYw0te/2YSEhISEhISEhISEhISEtf92M0+/fnVvjF9wpnctqvuCx+7W2e+TUJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCohIEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEwVcevN+BvbvduLPmTO64s+vVb7tZEARBEARBEARBEAT9g0Ne9LLr3HFX15lcs6Pqhds6vvCbdwuCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIKgEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQfCff/Xn3XLTakPNOJ37di955LGG6952kyAIgiAIgiAIgiAIgjf+5K3uubfnG9MnnMltu+q+8Jsf1pk7JgiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCitKzwl89eL8De3e75R2rnckdd3a9+m036x8c8k+1dnTcS17/Jnfc1XUm1+yoeuG2ji/85t1Kzx4VpWeF//yrP++Wm1Ybasbp3Ld7ySOPNbz6bTf7brnhJ291z709x9onncltu+o+/5sf1plrKz07VCuJ0jPb5IP3e2Lvbrd89Fxn8sGPHPeaH/u3BppDvlsu2LDRD7z+zT70kU+77T11p3PNjqoXbpvzhY992A0/eavSM19F6Rnvkx/4ebfctNpQM07nG9Mn/Nf76l7ztpt9t93w7lt96O7jjrVPOpPbdtV9/qMf1pk7pvTMV0lISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhI+Prexzyx9363vGO1M7njrq7X/NjN+ptDEhISEhISEhISEhISEhISEhISEhIu2DBuw6VX+9BHjjuTa3ZUfe+2jof+6PMSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIqERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERER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iqIoiqIoiqIoimJ9bck/j1acmNtvkouXtx2dPWl6OFQURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEUx+ZOWt84aGV1xyTDmYzPDlxbXFAURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURTFlzxtzbXHBeDQwyebWSzdvPTc3mvd/9t7M0Nxo3sVL23ZjPBp4sLHs7uqSPW/OVAghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEsL665MHGshNz+01y8fK2Y7MnHfroYyGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIc2fOWd84aGV1xyTDmYzPDlxbXBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYSpoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKovhlccH47MBwJq+yufXSzVvPnT7/g6IoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoimJ6OHR8NO/Gred2YzwaeLCxbH1tSVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVHsS/a8XndXl9xdXbLz5B0rf+54lc1HLxybO+WDw0e8LY6P5n39xRVbW0/t1u+/3vD5l1/Z8/rtK3tes0OHj7hy+47d+uTTz5S3xvRw6Kfbdzx98thunPCfsucN+BdKbSyrJGiyWQAAAABJRU5ErkJggg=="
  },
  {
    "width": 129,
    "height": 84,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAABUCAYAAAClU1TMAAAAAklEQVR4AewaftIAABk+SURBVO3BC7AvCF3Y98/39/+fe8659577vrt7F1iePlg28oYFFAVfiNGANUk1k0ymHWvsaDp2EpPRScekzWOmsTWvsek01nZq4qPRMQLBQBJBBWIQgyCKCAjLwi67d3fv47zuPefcls4svTBrp1OpK9z7+fTHX/fen8AtbrpR/e3l8BLc4aYb1f+8nHLTjW2Zm250y8lNN7jlNG66sS1DbrqRLRciN93AluOmG92y3HSDWy4mN93YlrnpRrecctONbZmbbnTLcdONblm56ca2LDfd4JaLctON6xqWuelGFpaTm25wy8pNN7bluOlGt6zcdGNblptucMuRm25syyk33diWuelGt5zJTTe2ZW660S3HTTe6ZeWmG9uyyE03suWUm25sy5GbbmzL3HSjW0656ca2LF/QHrn/XovF0saZW9302JaVzyc7ly/ZuXzR5YcftLe7Y+/qVdcO9l34+D12H37A2pUts3PZE87d6vSJkw4f7Pul937A1/zlv+2mx7Ycj7+LD9xnZ/OyK9ubdjcvO9jfd2V708VPfMzVhz/p0NUdp4+suvXsGZ+yulg6e2zD6uqa9fV1p06dsrjjWSr7+/sWy6X9vT37BwcOHTrk3b/zQeOm38+yPK5+7q99l69/6YscWa6YyYmTJ20c33B045x55u329/ctFgu7u7uUlZUVU/b39127ds3q2pqD/X0HBweWy6XLly/b3t524sQJa6urPv7xe+1vXVZu+n0spzyeTt5yzvOe93y7V65YLpem7B8cmLK/v2+5suKBT37Szu6OvatXnTt3u5WVFe9//2/7vY/e46HNHVsHWTl7zrHbnmT18BEPfuw+Lzv7iDvueLLf/M3f9PIf+Ptu+v0t8/hanr7N+973PnfddZeDgwOvf8PrfXJn397qUcuN487c8XTNquXKhvs+8n7fcOSCW2+51Xt/54Oe813/lcdy4pZzrn301x0cHLj11ltd29szy6WbHtsyj6/nfP1r/Ma//xV3Hhw4ODhwz6UrXvlf/KDHMouFne2P29zacmx9VR7b6uHDNjcvW19ft3d1z875+5249QluemzLKY+nE2dvc+zMLe67/z5nz95irQNTHsva+mHbD22ZcustZ015LKdue6KH9vYsl0srhw7Z3Lxsyo3oYH/PxQc/aWfzkt2tTTPjSXc+x/WWUx5vK4cO2dl+0MH+vuOrS1Mey5HjJ+18cMf6+rqZsfnwgzZOnfVYHjz/kN3dXYvFuLq9Zcqjzn/8Hhc++Qkfevu/Ye+Kc899qdue9iVO3/4knw92Ni/ZuvCIzQsPu7q7be/KFQcHBy5+4h57jzzgyJVHnOmSc6eOOnfqqCctF1ZXVqytrviFf/d+86znut6yPO4Ora7beXjH6uqqJ5y7TXlMG6fO2F0s7e/vmxnbly86dvqsx3Jpe0flzNlb3LO7rfxfrl7Z9WPf9x3+zGu+0Xd881f7lI985CN+6K9+p+/5Jz9r5dCqx8PD93/cle0tO5uXXdnadLC/b3d70+b9HzMX7rexf9ltR3jSmSNuXV8zi7FxeN3h9VUbJ9bcevoEzzqJk/6fvO9Dn1A+w3LK423j5CnbH9525epVy+XS7uZl60c3fLbVtTUPXLxg98oVR44c8cjmZVMey3ZLe/v7jhw+7GP/7r1uedJTnTr3RB/41V92950Pe8lL7vaoJz/5yb7iec/0gV/9ZXd9xdf4XNjd3rJ58RGXzj9g/+oVV3d3Hezvufzg/XbO3+fo9nknZ9vZjRVPuuW4Wxfj0MrS2qFDzpzcsHFk3caRddyO2/1BPfjwRRc3t21tbTq6v2+xXHrUsjzujp44aXe5tLOz49ChQ7YvPuzwxobPtnnhYQ+cf0hYX1v3gXf+iu1Lj7jvA7/tYPsymxecXj/kxLGjnv3UJ1o9dMiRw4d91ZNP++V//Tpf+W3f4cwn/5Fnf+UVW1tbDh8+7FHrqw84fd8P2b/6FZaHVj2WSw89aPvSRTubl+xsXnZwcGBvd8fFj31Yl89b273giUevue3kutNH1y0WC+urhxw5vGbj5JrbbzmFI3g6nu4PYvfKVecfueTCpS1bO7t2rly1v7fv/MUtn3ho08d3DrmyfoqNU07d8XTNcYvlitUXv9DRg3219Kjl+JQ8nh657+OuXrhouVw6dOiQX/q5n7Bx7Ljt+z/m8IKN1aVzt9zq0OohX3bXXVYOHXLruXP+5NGjjhw9oie80P7+vuVi4erVq1ZWVly5csXBwYHLm5ue8Ywv8tb3v9kHf/0d/vw3/a6NjfzN//bHPfs5X2NlZcW73vUuX/TUX7UYfumn/hfHT5+1+cAnHNm8z7F2nF7P024/5cyM5XLh8Nqq4xuHHTt62MljR/iy23G7P6iHL266eHnLhUtbtnZ27e3t2z848KGPP+T89jUP7a3aPXbOkbPnHDlxyixvtbK6anXjsMPHjjt66oyVQ6ueiCf6f29ZHne//VM/4htf/WqHDx/2JV/6TM94xhfZPziwXLxAM/auXrW6uurq3p5rBweuXr3qU9aPHLG3t+fQoUOuHRx46MIFV69edfHiBVtbW/b391U++tGPuud973Ppg+/2v/36Fztx6Ame/8RjTl35PYuDhW9+7lmH177X8Y3DvuX5G1YPreAO3OEPYm9/3yfPX3Bpa8fm1o7t3Sv29/dduLztvoe33buZnUMn7B895eSTnmZl9bhZLK0eO2Lt3IbDG8dsnDrjDM74/89yGo+3xaE1p06fsbOz49rBgcVi4dq1axaLhXvvvdfe3p6t7S2XLl7kGo9ceMT5Bx906ZHzjq7s21hbOHvyiGc+7YnWJidmHLllzcbhdceOrjvzlS/Gi30uXNrc9silTQ9f2LRz5YorV/fs7x+455MXPHDpqkeurdtaP2P9zG02ztxmFmesrK5ZObPm6IlTjhw/aXX9sNtxuz8alvnDt335ks0Lj9i88JArOzs+ct/93vgvX+/h8+ftbD5i1a6n3n7K2RPH3Hb2hOViHDq0Yu2Jh5w+ftSJjTMOrz/L58r95x9xaXPH5a1tm9u7DvYPbG7vuufBy+7fyubiKCdudfTWJ1k9fJtZLKxuHLF+5Ki1oxtOnL3NKZzy+Wk55XPhofvudWV7y/bmZbtbmw729+1sXXb5vo/Zf/AeG+269fA1T73tuI2VpVmMjcPrDq+v+o+/66vdevqEz5Wt7V2PXNr00IXLdnav2r1y1d7+vgcefsSDFx52dfGA+x580IVj32h5ZMPLbvthz/zSpaPncsfJnD9/zc/+7t/3Za/5Wk/yhW9ZHtPu9pbNC4+4eP4Be1evuLq742B/z8UH7rf94H3Wth90/OCSW4+veeItxz15sbCysrB26JAzJzdsHFm3cWQdt+E2f1APPnzRxc1tlzd3bG7v2Ns/sHvlqg9/4hEPXRkXDtY49URHzp5zeONWs1w6dGTd2tkjPvHm7/Nff/8HLZc+7R//kw1HXvHdPuXav/txL3nxJY968h286a1/17X9V5rlwhe0ayxHHvXTf+eveuHpPbedWHNiY93pxcKR9VXra6s2NtbcfsspvngdT8VT/UHsXrnq/COXXLi0ZWtn186Vq/b39p2/uOUTD225b/eQvcOnzLEzztzxNC1OWSyXVk8ecfiO444cO+7I8ZOegqf4/X3oPe/yrd/0fsvl0qPOP3TNh1f+ihcdPeZTfuni93j1Q3/T6VN51J/85nv8s3e9wzNf9OW+oMVyyqNuP7rwHa+92/9XD1/cdPHylguXtmzt7Nrb27d/cOBDH3/IQ9s8vL9q/8Ttjp495+jJsxaL262srVo9ediR4ydsnDzj2OqqY/gSnxsffcuPeP7fWLreG96YP/ayV5ryKc97xau94Y1/y5/9dp/2tKeO1Tf8Pdee/xKL5dIXsmX5tN3DZ1xvb3/fJ89fcGlrx+bWju3dK/b39124vO2+h3d8YitX1k64dvS003c83cqhUxaLpbVTR60dPerw0WOOnT7ryXiyP3wf/I1f8+de81YsPer8Q9f8h8s/4OXHT3jUsVOn/MrW97t46W85tuHTvvnr3uufv+vt7nzxV/hCthz/t/Uz5/z1n/j3do+cdeTMOcfO3maxuNXK6ppDx9YcPXHa0eMnbKwftoEv8kfbR97yI17w15eu94Y35vmvfLXxmZ71kld605v/hv/otUuP+uIvGpd+6u+59oKXWiwWvlAtK4/6ytd+uy8UH33/b/qzf+KtWHrUxUv85tYP+PKTp32207c9wZve9L1etfUPHDns0779te/xhl97uztf/BW+UM3ExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMQHfvHHvOB5S9d705v3PPeVrzYxMTExMfGCr3uNX/6Vfde7686FC7/+w64d7JmYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJhKpVKpVCqVSqVSqVQqlUqlUqlUKpVKpVKpVCqVSqVSqVQqlUqlUqlUKpVKpVKp3PM77/Pal/+s6128xC999HsdO3lapVKpVCpnzj3B6379P7Wz6zN822vf4/3vfIdKpVKpVCqVSqVSqVQqlUqlUqlUKpVKpVKpVCqVSqVSqVQqlUqlUqlUKpVKpVKpFBNCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCOE9/+rHvPTuFdd705v3vPDrXiuEEEII4flf96e87e1XXe+uOxceftcPO9jbE0IIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIYaZMmTJlypQpU6ZMmTJlypQpU6ZMmTJlypQpU6ZMmTJlypQpU6ZMmTJlypQpU6ZMmTJlypQpU6ZMmTLlnve/z5965c9YLn3azi5vv/e/dPbcE0yZMmXKlClTptz+lKf7hXf/Z/b2fIZve+1veP+vvd2UKVOmTJkyZcqUKVOmTJkyZcqUKVOmTJkyZcqUKVOmTJkyZcqUKVOmTJkyZcqUKVOmTJkyZcqUKVOmTGOKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoih++5d/2kvvXnG9t7z1ihd87WsVRVEURVEUxRfd/U3e9o6rrnfXnQsX3/djiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoikmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmS5P6PfNifuPt/tVz6tJ1d/uV/+E5nbnuCJEmSJEmSJHnKl97lf/+33+Kzfeur3up33/0uSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIks4hFLGIRi1jEIhaxiEUsYhGLWMQiFrGIRSxiEYtYxCIWsYhFLGIRi1jEIhaxiEUsYhGLWMQiFrGIRSxiEYtYxCIWsYhFLOKdv/CTXvTCFdd7y1uveNGr/rRFLGIRi1jEIhaxiEUsYhGL+LKv+XPe+a4917vrzoVPvvMfWsQiFrGIRSxiEYtYxCIWsYhFLGIRi1jEIhaxiEUsYhGLWMQiFrGIRSxiEYtYxCIWsYhFLGIRi1jEIhaxiEUsYhGLWMQiFrGIqVQqlUqlUqlUKpVKpVKpVCqVSqVSqVQqlUqlUqlUKpVKpVKpVCqVSqVSqVTu++iHfcNz/rG1VZ+2t8cb3/0X3P6Up6tUKpVKpVKpVCqVZ9z1HD/+L77KZ/vjr3iLD/zGr6lUKpVKpVKpVCqVSqVSqVQqlUqlUqlUKpVKpVKpVCqVSqVSqVQqlUqlUqlUKlMURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEUv/rGn/SVLz/kem97x1UvftWfVhRFURRFURRFURR3fu13e9d/2HO95z936bfe/I8URVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURTEhhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgjh/o/+nlc9+3+wturT9vb4mbf8Sbc/5WlCCCGEEEIIIYQvefbz/dy/uttn+zPf/Is+8O5fE0IIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEMJMmTJlypQpU6ZMmTJlypQpU6ZMmTJlypQpU6ZMmTJlypQpU6ZMmTJlypQpU6ZMmTJlypQpU6ZMefdbX+8rX37I9d72jque/6o/b8qUKVOmTJkyZcqUKVOmTJky5Zbn/efe+75913vB85be9+Z/aMqUKVOmTJkyZcqUKVOmTJkyZcqUKVOmTJkyZcqUKVOmTJkyZcqUKVOmTJkyZcqUKVOmTJkyZcqUqVQqlUqlUqlUKpVKpVKpVCqVSqVSqVQqlUqlUqlUKpVKpVKpVCqVSqVSOX/fx73sKT9kbdVn+Jlf/FZPe+YfU6lUKpVKpVKpVCqVSqXyx170Mj//pmf7bN/+Tb/od979ayqVSqVSqVQqlUqlUqlUKpVKpVKpVCqVSqVSqVQqlUqlUqlUKpVKpVKpVIoJIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEJ4+xt/xpe/bOF673zXnhd+w38ihBBCCCGEEEIIISyXSxtf+hd96MMHrveC5y395pv+gRBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhDATExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEw/dd68X3v53HdvwGX7ida/09DvvMjExMTExMTExMTExMTExMTEx8ey7v9w//xd3+Gzf9k2/6APvfqeJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiSkzZcqUKVOmTJkyZcqUKVOmTJkyZcqUKVOmTJkyZcqUKVOmTJkyZcqUKVOmTJkyZcqUKVOmTHnbG3/W137N0vXe+a49X/Z1323KlClTpkyZMmXKlClTpkyZMmXKlCmrq2vWnvH9PvLRA9d7wfOWPvD2f2rKlClTpkyZMmXKlClTpkyZMmXKlClTpkyZMmXKlClTpkyZMmXKlClTpkyZMmXKlClTpkyZMmVCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhEsPn/f823/YsQ2f4Z+97hWe+ZwXCCGEEEIIIYQQQgghhOd/+Vd5/RuP+2yv+ap/7sO/9V4hhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQljO5PPRO978et/zmmuu9+7f2Pfcr/+LZvK5trq+buvkX3Pvx/+SJ9w+HvWC5y393H/3o57xrP/e56sZDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBpYfOu2Pxg45t+Aw/+wt3e9ZzX2AwGAwGg8FgMBgMBoPBYDAYDAaDu1/59f7tW074bF/7op/24d96j8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAymUqlUKpVKpVKpVCqVSqVSqVQqlUqlUqlUKpVKpVKpVCqVSqVSqVQqb3vT67z6Vddc773v23fHC79bpVKpVCqVSqVSqVQqlUqlUqlUKpWjx4671/c5/9A113vp3Sve/vofValUKpVKpVKpVCqVSqVSqVQqlUqlUqlUKpVKpVKpVCqVSqVSqVQqlcoURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVFcfPi8Jy1+0OlTud5P/dxzPOfulymKoiiKoiiKoiiKoiiKoiiKonjJV3+DN7wx11su+RMv/2kf+q33KIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKCZJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkuSdb/nXXv2qa673Ox848LSX/mXL5YokSZIkSZIkSZIkSZIkSZIkSZITp86499pfd/GSz/DSu1e87XU/KkmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJJkpU6ZMmTJlypQpU6ZMmTJlypQpU6ZMmTJlypQpU6ZMmTJlypQpU6ZMmTJlypQpU6ZsX77klv3/xulTud7P/8KXeO5LvtyUKVOmTJkyZcqUKVOmTJkyZcqUKVOmTJkyZcqUKXe/4uu96c17rrdc8s0v/ykf+u33mjJlypQpU6ZMmTJlypQpU6ZMmTJlypQpU6ZMmTJlypQpU6ZMmTJlypQpU6ZMmTJlypQpiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiuId/+aNvvqrLrjehz584NgX/yXL5VJRFEVRFEVRFEVRFEVRFEVRFEVRnL3tdu/55F9x8ZLP8NK7V/zKz/9PiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoluP/lD/yNi9d9Laf+0HPvWXPB37Xp7317U/zTd/zSpM/VK/449/qn/7k33Hnl/oMZ1d/3O+9/zs97Uvv9PliOdMv4RafB17zF/5H9/pML/6W26ytrfnDdtsTnujB5/0L9+7uut6TXsLGseOmfJ74xP8BkQOqir5e9n0AAAAASUVORK5CYII="
  },
  {
    "width": 65,
    "height": 42,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 33,
    "height": 21,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAVCAYAAADID4fUAAAAAklEQVR4AewaftIAAAK8SURBVMXBwWscZRjA4d/3vt+8M7M7Jp2y3ZJU1JSmkLOeexK8CSIUFBFPevEvEAve/AfEk3jpqT1oD8Wjx156sVB68JDFtW2a2N0km012Z2ZnPiniRZo2DcI8j3v/9v1tIKY9V3wssuQgoT3iExFwtMqbOsDRJh+L0DZvKrTNmwpt8yZC27yp0DYfifAi852HJARkUeDripgGqoKn8RniCxf5P3gTAcex8skjdl1CnWSk0xHjlQ2y/S3iThdT4bQWZYGoR1Tx5oUXWXRzou5Zovwc5d1NIq8QAn52QPPbPUJQ0rffIxAojw5ZFDO6VCR1QdIUdChJmgKrZ1iYsziaUB7uY91l7vWvEOV9vKlwnLqqmI52SIYPSGVBnqUkT+7gXQ3TkuV8l2KmVPevEwhosoRlOYXEHIWIyncoJGOXnLnEVD4hWkmI4oRnuvzDh9kRKwebWD3D6jkWCsrpHtXhLtZZwvdeo1k5T+U7FC5mTkTpU94I3/OkXCftNeTZQx7E13A8nwcyjufjyFP7lLFfpvIJpcbYaoolKcep9za5fOEXNrd+5SA0vHP+XX4ffozm65yGz7KMOtvAAAO6vNyl5CcGoy9J89d5ZvDXF2ykNxnoNU5DTAVTwVQwFUwFU8FUMBVMBVPBVDAVwuRP1no/MKw/wFQwFf6oP2Stfx03GWAqmAqmgqlgKpgKpoKpYCqYCqaCqWAqeFMHOE5qNfqZ4fhzst4a/7LeJYZPP+Wiv8G2fs2rCYipYOowdZg6TB2mDlOHqcPUYeowddSTR7x59ju2wlVMHaYOU4ep43HzEW/1f6TZH2DqMHWYOkwdpg5Th6nD1GHqMHWYOkwFbyqc1Jlwi629z1jur/NfUX+Dx+OrrHKTqX7Fq/CR6D4w5yUmeyOy6g6j5Bs6ojzPTviEc823TMfb5L1VTqj5G4iX0thV1LzOAAAAAElFTkSuQmCC"
  },
  {
    "width": 17,
    "height": 11,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAALCAYAAACZIGYHAAAAAklEQVR4AewaftIAAAEUSURBVKXBPU7DMBiA4df2Z8chTgudkJD4EerEwNYTcAIOwAk4EodgYWVmY0KsqBJlBErbNGkSozIVqIRUnked3zx8AMLmTqQjxqOUsDkluRX+S4IT/ksyK6xqp2OkWWDbhiLtoBPPXyRYYVV8e6FFUVuPr0sMO6g0EKs5aVuxFSuStqItZ0xsTrG9h3SbGdlijKlLmnJOLEeIteiYkjf3mKnitTlD+4zCWEoVeNcO0/MYrQmApM5RS49KEsQlsH/KAvDlE05A0aLrlHlyiAI84PlOQqcLKH7arW8Z2QuWDuIVz+6S9SISnPBLMUQlx3TSjC+qT94MiekR64gXuQYMK+rikVkY4EVYmugBMrnD5H3WmH4CX3JUJ9NEEiYAAAAASUVORK5CYII="
  }
];
mipmaps.forEach( mipmap => {
  mipmap.img = new Image();
  window.phetImages.push( mipmap.img ); // make sure it's loaded before the sim launches
  mipmap.img.src = mipmap.url; // trigger the loading of the image for its level
  mipmap.canvas = document.createElement( 'canvas' );
  mipmap.canvas.width = mipmap.width;
  mipmap.canvas.height = mipmap.height;
  const context = mipmap.canvas.getContext( '2d' );
  mipmap.updateCanvas = function() {
    if ( mipmap.img.complete && ( typeof mipmap.img.naturalWidth === 'undefined' || mipmap.img.naturalWidth > 0 ) ) {
      context.drawImage( mipmap.img, 0, 0 );
      delete mipmap.updateCanvas;
    }
  };
} );
export default mipmaps;