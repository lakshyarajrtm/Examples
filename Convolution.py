import numpy as np
import scipy.stats as st
from PIL import Image, ImageFilter
from scipy import signal
import random



def mean(vec):
  s = sum(vec)
  return s/len(vec)


def convolve1D(img , kernel, kernlen):
    for i in range(800):
        for j in range(600):
            img[i,j] = np.array([img[i-1:j-1], img[i-1:j], img[i:j+1],
                        img[i-1:j-1], img[i-1:j], img[i:j+1],
                        img[i-1:j-1], img[i-1:j], img[i:j+1]
                        ])

def gkern2(kernlen=21, std=3):
    """Returns a 2D Gaussian kernel array."""
    gkern1d = signal.gaussian(kernlen, std=std).reshape(kernlen, 1)
    gkern2d = np.outer(gkern1d, gkern1d)
    return gkern2d


def gkern(kernlen=4, nsig=3):
    """Returns a 2D Gaussian kernel."""

    x = np.linspace(-nsig, nsig, kernlen+1)
    kern1d = np.diff(st.norm.cdf(x))
    kern2d = np.outer(kern1d, kern1d)
    return kern2d/kern2d.sum()


